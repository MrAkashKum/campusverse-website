import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CampusVerse — Trusted Learning Network',
  description: 'A trusted student knowledge network for notes, papers, courses, creators, projects, events, and campus communities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
