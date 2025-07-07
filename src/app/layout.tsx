import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'ZenFlow Coaching',
  description: 'Unlock Your Creative and Entrepreneurial Potential',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
        />
      </head>
      <body className="bg-white">
        <div
          className="relative flex size-full min-h-screen flex-col"
          style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
          <div className="flex-grow">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
