import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusVerse | Trusted Student Learning Network',
  description:
    'CampusVerse helps students discover trusted notes, question papers, cheat sheets, creators, courses, projects, and campus events.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
