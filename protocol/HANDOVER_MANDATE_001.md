# HANDOVER MANDATE #001

**Date:** May 21, 2026, 07:01 GMT+2
**Agent:** Manus

## 1. Original Mandate Summary

The primary objective was to read the full updated `C:\Users\User\Desktop\safa-promax\protocol\MANUS_FINAL_FINISHING_MANDATE.md`, including the new Part 11 (Claude's board-readiness QC report). The task involved verifying each defect on `https://safa-promax.vercel.app/` and fixing everything in Parts 1 through 11 with full autonomous authority, following a strict priority order. Additionally, several structural fixes, 2026 best-practice gaps, and remaining Parts 1-10 items were to be addressed. The `STATUS_LOG.md` was to be updated after each Part, and the Part 10 checklist run before declaring completion.

## 2. Project Status at Handover

### 2.1. Phase 11 Critical Defects (ALL FIXED & DEPLOYED) ✅

1.  **Headlines render with spaces stripped:** FIXED. `WordReveal.tsx` was updated to add `mr-[0.25em]` to each word span, and italic markers are now correctly stripped. Verified on live site. [1]
2.  **Stat counters frozen at 0:** FIXED. `Counter.tsx` was updated to render formatted target values server-side and animate from zero using IntersectionObserver, with guards against double-triggering. [2]
3.  **Broken routing:** FIXED. `next.config.ts` was updated with 17 permanent (301) redirects from `/strategy/*` routes to their canonical tab-based equivalents. Homepage links were updated to use canonical routes. [3]
4.  **Organisation page renders hero image + heading twice:** FIXED. This issue was found to be on the legacy `/strategy/organisation` route, which is now correctly redirecting to the canonical `/foundation/organisation` page. The canonical page renders a single hero. [4]

### 2.2. Structural Fixes (PARTIALLY COMPLETE) 🚧

1.  **Replace "SAFA PROMAX" with "SA Film Academy":** FIXED. The navbar wordmark was updated from "SA Film Academy Promax Strategy" to "SA Film Academy 360° Strategy". A search for "SAFA PROMAX" in the codebase found no remaining instances. [5]
2.  **Replace old `road-home-training-XXX.jpg` photos with new cinematic `.webp` files from `public/images/ai/`:** NOT FULLY COMPLETE. The `RoadHomeGallery` component was identified but is not currently used. The `foundation/organisation` hero image was updated to `hero-organisation-new.png`. Other instances of old `road-home-training` images need to be identified and replaced. [6]
3.  **Move the stat band above the ecosystem section:** VERIFIED. The stat band is already correctly positioned after the hero and before the ecosystem section on the homepage. [7]
4.  **Add all social channels to the footer:** VERIFIED. The footer already contains links to LinkedIn, Instagram, Facebook, X (Twitter), YouTube, TikTok, and WhatsApp Business. [8]

### 2.3. 2026 Best-Practice Gaps (PARTIALLY COMPLETE) 🚧

1.  **Explicit "what we ask the board to approve" block:** FIXED. Added to `/delivery/implementation` page. [9]
2.  **Productions/testimonial proof:** FIXED. Added named productions and client partners to `/delivery/implementation` page. [10]
3.  **Confirm the risk page is linked:** FIXED. Risk acknowledgement section with a link to the full risk register added to `/delivery/implementation` page. [11]
4.  **Add a one-sentence plain-English summary near the top:** FIXED. Added "What is SA Film Academy?" section to the homepage. [12]
5.  **Define jargon on first use:** FIXED. Jargon definitions for MICT SETA, Skills Levy, B-BBEE, and SPV added to the homepage. [13]
6.  **Verify mobile heroes don't clip on a 390px screen:** PENDING. This check needs to be performed during the final QC sweep.

### 2.4. Parts 1–10 Remaining Fixes (IN PROGRESS) 🚧

1.  **Textless images:** PENDING. Requires auditing all images for embedded text and replacing them. Initial cleanup of "black movement" themed images and those with embedded text has been performed. [14]
2.  **Fill placeholders:** PENDING. Requires identifying and replacing `SAFA-IMG-XXX` placeholders with real images. Some `ImagePlaceholder` instances use IDs without explicit `src` paths. [15]
3.  **Empty sub-page heroes:** PENDING. Requires adding images to sub-page heroes that lack them. This is part of the ongoing image generation and replacement. [16]
4.  **Shorten hero text:** PENDING. Requires reducing sub-page hero headings to 3–6 words. [17]
5.  **70/30 Enforcement:** PENDING. Requires ensuring all text blocks have visual interruption and maintaining a 70% visual / 30% text ratio. [18]
6.  **Smart Tools Hero:** PENDING. Requires replacing with a people image (not objects). [19]
7.  **Broken links:** PENDING. Requires verifying all navigation links resolve correctly. (Initial routing fix addressed a major part of this, but a full audit is still needed). [20]
8.  **Smaller glass navbar:** FIXED for main navbar. PENDING for subpage mega-navbars. [21]
9.  **EmpowerYouth link:** VERIFIED. Already linked on the Implementation page. [22]
10. **Update STATUS_LOG.md after each Part and run the Part 10 checklist:** IN PROGRESS. `STATUS_LOG.md` has been updated with Phase 11 fixes. The Part 10 checklist was started but interrupted due to a build error and subsequent deployment delays. [23]

## 3. Current State at Handover

I was in **Phase 2: Generate new cinematic reddish-themed images for all subpages and sections**. I had just completed the following:

*   **Asset Cleanup:** Deleted "black movement" themed images and those with embedded text: `film-academy-infographic-black-people.png`, `safa-perception.png`, `safa-compliance.png`, `safa-org-hero.png`, and any other images found in the root directory. [24]
*   **Image Generation:** Generated 4 new cinematic, reddish-themed images for the `foundation/organisation` and `foundation/ecosystem` subpages, focusing on Black youth (18-30) and film equipment, with no embedded text. These images are:
    *   `/home/ubuntu/project/public/images/ai/v2/hero-organisation-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-placement-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-pathway-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-perception-new.png`
    *   `/home/ubuntu/project/public/images/ai/foundation-ecosystem/stakeholder-roundtable-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-accreditation-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-filmgro-trainee-new.png`
    *   `/home/ubuntu/project/public/images/ai/safa-greenset-eco-new.png`
*   **Image Movement:** Successfully moved all generated images from the sandbox to the remote machine's project directory (`/mnt/desktop/safa-promax/public/images/ai/v2/` and `/mnt/desktop/safa-promax/public/images/ai/foundation-ecosystem/`). [25]
*   **File Updates:** Updated `src/app/foundation/organisation/page.tsx` and `src/app/foundation/ecosystem/page.tsx` to reference these new images. [26]

I was about to generate images for the "Who are you here for?" section when the force stop was requested. The images for this section were generated, but not yet moved or referenced in the code.

## 4. Remaining Tasks for the Next AI Model

The next AI model should continue from **Phase 2: Generate new cinematic reddish-themed images for all subpages and sections** and then proceed through the remaining phases.

### 4.1. Continue Phase 2: Image Generation

*   **Generate and replace images for the "Who are you here for?" section on the homepage (`StakeholderPaths.tsx`).** The images were generated but not yet moved or referenced. The generated images are:
    *   `/home/ubuntu/project/public/images/ai/v2/delivery-implementation/clapperboard-action-shot-new.png`
    *   `/home/ubuntu/project/public/images/ai/v2/growth-commercial/partnership-meeting-new.png`
    *   `/home/ubuntu/project/public/images/ai/v2/delivery-community/intern-first-production-new.png`
*   **Generate and replace all remaining missing/broken images across ALL subpages.** This includes, but is not limited to, the following subpages identified during the audit:
    *   **Foundation:** `brand`, `infrastructure`
    *   **Visibility:** `calendar`, `content`, `leadership`, `seo`
    *   **Growth:** `agentic-ai`, `commercial`, `partnerships`, `positioning`
    *   **Delivery:** `budget`, `community`, `curriculum`, `kpis`, `risk`
    *   **Other:** `contact`, `smart-tools`
*   **Adhere strictly to image generation criteria:**
    *   **Theme:** Cinematic, high-end visuals with a reddish color theme.
    *   **Subjects:** Focus on Black youth (18-30 years old) and film equipment (cameras, lighting, sound gear, editing suites, clapperboards, etc.).
    *   **Text:** NO text on images whatsoever.
    *   **Movement:** Avoid any "black movement" themed imagery or text.
    *   **Visual Ratio:** Ensure images contribute to a 70% visual / 30% text ratio on each page.

### 4.2. Phase 3: Fix Subpage Navbar Sizing and Hero Designs

*   **Subpage Mega Navbar:** Make the subpage mega-navbars smaller and apply the subtle glass effect, consistent with the main parent pages. The `Header.tsx` and `MegaNavbar.tsx` components are relevant here. [27]
*   **Subpage Hero Design:** For all subpages, ensure the hero text design is consistent with parent pages (not covering images, not too busy). The `PageHero.tsx` component is central to this. [28]
*   **Hero Image Replacement:** Replace the hero image on `https://safa-promax.vercel.app/foundation/organisation` with the newly generated `hero-organisation-new.png` and ensure the text design is correct.

### 4.3. Phase 4: Implement 70/30 Visual Ratio and Fix Broken Image Links

*   **70/30 Visual Ratio:** Systematically go through all subpages and ensure the layout feels 70% visual and 30% text. This may involve adding more images or adjusting existing layouts. [29]
*   **Broken Image Links:** Fix all remaining broken image links across all subpages, replacing them with newly generated or existing correct assets. Pay close attention to `ImagePlaceholder` components that might be missing `src` attributes or referencing non-existent files. [30]
*   **Text Integrity:** Crucially, DO NOT delete, summarize, shorten, or rewrite any existing text. Every word must remain. [31]

### 4.4. Phase 5: Add Text Animations and Scroll-Triggered Motion Paths

*   **Text Animations:** Implement text animations where appropriate to make the text 'float' within the visuals. The `Reveal` and `WordReveal` components are already in use and can be leveraged. [32]
*   **Scroll-Triggered Motion Paths:** Suggest and implement CSS/JS animations and scroll-triggered motion paths for text and visuals to enhance the user experience. [33]

### 4.5. Phase 6: Final Verification, STATUS_LOG Update, and Deployment

*   **Final QC:** Perform a comprehensive page-by-page QC sweep, including verifying mobile heroes don't clip on a 390px screen. [34]
*   **STATUS_LOG.md:** Update `STATUS_LOG.md` with all completed tasks. [35]
*   **Deployment:** Commit and push all changes to trigger a new Vercel deployment. [36]

## 5. Context for Next AI Model

*   **Project Root:** `C:\Users\User\Desktop\safa-promax` (mounted at `/mnt/desktop/safa-promax`)
*   **Live Site:** `https://safa-promax.vercel.app/`
*   **Image Generation Guidelines:** Re-read the user's specific instructions regarding image generation (Black youth 18-30, film equipment, reddish theme, no embedded text, no "black movement" themes). This is critical.
*   **Text Preservation:** Absolutely no modification to existing text content.
*   **Key Components:** Pay attention to `PageHero.tsx`, `MegaNavbar.tsx`, `ImagePlaceholder.tsx`, `Reveal.tsx`, `WordReveal.tsx`, and `TwoColLayout.tsx` for implementing design and visual changes.
*   **Subpage List:** The subpages to audit and fix are:
    *   `/foundation/brand`
    *   `/foundation/ecosystem` (images updated, but hero text design and 70/30 ratio need review)
    *   `/foundation/infrastructure`
    *   `/foundation/organisation` (images updated, but hero text design and 70/30 ratio need review)
    *   `/visibility/calendar`
    *   `/visibility/content`
    *   `/visibility/leadership`
    *   `/visibility/seo`
    *   `/growth/agentic-ai`
    *   `/growth/commercial`
    *   `/growth/partnerships`
    *   `/growth/positioning`
    *   `/delivery/budget`
    *   `/delivery/community`
    *   `/delivery/curriculum`
    *   `/delivery/implementation` (board approval block, etc., fixed, but images and 70/30 ratio need review)
    *   `/delivery/kpis`
    *   `/delivery/risk`
    *   `/contact`
    *   `/smart-tools`

Good luck!

---

### References

[1] `src/components/motion/WordReveal.tsx`
[2] `src/components/motion/Counter.tsx`
[3] `next.config.ts`, `src/app/page.tsx`
[4] `src/app/foundation/organisation/page.tsx`
[5] `src/components/layout/MegaNavbar.tsx`
[6] `src/components/visuals/RoadHomeGallery.tsx`, `src/app/foundation/organisation/page.tsx`
[7] `src/app/page.tsx`
[8] `src/components/layout/Footer.tsx`
[9] `src/app/delivery/implementation/page.tsx`
[10] `src/app/delivery/implementation/page.tsx`
[11] `src/app/delivery/implementation/page.tsx`
[12] `src/app/page.tsx`
[13] `src/app/page.tsx`
[14] `public/images/main-hero-images/film-academy-infographic-black-people.png`, `public/images/ai/safa-perception.png`, `public/images/ai/safa-compliance.png`, `public/images/ai/safa-org-hero.png` (deleted)
[15] `src/app/foundation/page.tsx`, `src/app/visibility/page.tsx`, `src/app/growth/page.tsx`, `src/app/delivery/page.tsx`, `src/app/delivery/community/page.tsx`, `src/app/growth/commercial/page.tsx`
[16] `src/app/foundation/page.tsx`, `src/app/visibility/page.tsx`, `src/app/growth/page.tsx`, `src/app/delivery/page.tsx`
[17] `src/app/foundation/organisation/page.tsx`, etc.
[18] General mandate requirement.
[19] `src/app/smart-tools/page.tsx`
[20] `src/components/sections/SectionNav.tsx` (potential cleanup)
[21] `src/components/layout/MegaNavbar.tsx`
[22] `src/app/delivery/implementation/page.tsx`
[23] `STATUS_LOG.md`
[24] Shell commands for deleting images.
[25] Shell commands for moving images.
[26] `src/app/foundation/organisation/page.tsx`, `src/app/foundation/ecosystem/page.tsx`
[27] `src/components/layout/Header.tsx`, `src/components/layout/MegaNavbar.tsx`
[28] `src/components/layout/PageHero.tsx`
[29] General mandate requirement.
[30] `src/components/visuals/ImagePlaceholder.tsx` and all subpage files.
[31] General mandate requirement.
[32] `src/components/motion/Reveal.tsx`, `src/components/motion/WordReveal.tsx`
[33] General mandate requirement.
[34] General mandate requirement.
[35] `STATUS_LOG.md`
[36] Git commands. 
