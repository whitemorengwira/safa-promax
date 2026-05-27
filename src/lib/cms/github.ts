import "server-only";

export interface GithubCommitFile {
  path: string;
  content: unknown;
}

export interface GithubCommitResult {
  skipped: boolean;
  reason?: string;
  commitUrl?: string;
  branch?: string;
}

function repoConfig() {
  const token = (process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_PAT || "")
    .replace(/^\uFEFF/, "")
    .trim();
  const vercelRepository =
    process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
      ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
      : "";
  const repository = (process.env.GITHUB_REPOSITORY || vercelRepository || "whitemorengwira/safa-promax")
    .replace(/^\uFEFF/, "")
    .trim();
  const branch = (process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "master").replace(/^\uFEFF/, "").trim();

  return { token, repository, branch };
}

async function githubRequest<T>(url: string, init: RequestInit, token: string): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "x-github-api-version": "2022-11-28",
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`GitHub request failed (${response.status}): ${detail || response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function commitCmsFiles(files: GithubCommitFile[], message: string): Promise<GithubCommitResult> {
  const { token, repository, branch } = repoConfig();

  if (!token) {
    return {
      skipped: true,
      reason: "GitHub token is not configured. CMS data was saved, but the deployment commit was skipped.",
      branch,
    };
  }

  if (!files.length) {
    return { skipped: true, reason: "No CMS files were supplied for commit.", branch };
  }

  const apiBase = `https://api.github.com/repos/${repository}`;
  const ref = await githubRequest<{ object: { sha: string } }>(
    `${apiBase}/git/ref/heads/${encodeURIComponent(branch)}`,
    { method: "GET" },
    token,
  );
  const currentCommitSha = ref.object.sha;
  const currentCommit = await githubRequest<{ tree: { sha: string } }>(
    `${apiBase}/git/commits/${currentCommitSha}`,
    { method: "GET" },
    token,
  );

  const tree = await Promise.all(
    files.map(async (file) => {
      const blob = await githubRequest<{ sha: string }>(
        `${apiBase}/git/blobs`,
        {
          method: "POST",
          body: JSON.stringify({
            content: `${JSON.stringify(file.content, null, 2)}\n`,
            encoding: "utf-8",
          }),
        },
        token,
      );

      return {
        path: file.path.replace(/\\/g, "/"),
        mode: "100644",
        type: "blob",
        sha: blob.sha,
      };
    }),
  );

  const newTree = await githubRequest<{ sha: string }>(
    `${apiBase}/git/trees`,
    {
      method: "POST",
      body: JSON.stringify({
        base_tree: currentCommit.tree.sha,
        tree,
      }),
    },
    token,
  );

  const newCommit = await githubRequest<{ sha: string; html_url: string }>(
    `${apiBase}/git/commits`,
    {
      method: "POST",
      body: JSON.stringify({
        message,
        tree: newTree.sha,
        parents: [currentCommitSha],
      }),
    },
    token,
  );

  await githubRequest(
    `${apiBase}/git/refs/heads/${encodeURIComponent(branch)}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        sha: newCommit.sha,
        force: false,
      }),
    },
    token,
  );

  return {
    skipped: false,
    commitUrl: newCommit.html_url,
    branch,
  };
}
