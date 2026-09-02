import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const syne = localFont({
  src: [
    { path: './fonts/Syne-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Syne-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Syne-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Syne-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-syne',
});

const dmSans = localFont({
  src: [
    { path: './fonts/DMSans-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/DMSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/DMSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/DMSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/DMSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Fiysam Studio | Product Studio',
  description: 'Fiysam Studio is a Lagos-based product studio for useful software.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-obsidian text-white-warm">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
