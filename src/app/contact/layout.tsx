import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SA Film Academy · Get In Touch",
  description: "Reach the SA Film Academy team for production placement enquiries, partnership discussions, funding conversations, and media requests.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
