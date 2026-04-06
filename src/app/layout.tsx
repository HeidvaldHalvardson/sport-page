import { Montserrat, Raleway } from 'next/font/google';

import './styles/globals.css';
import { Header } from '@/widgets/Header';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-raleway',
  weight: ['700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${raleway.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-main-bg font-main">
        <Header />
        {children}
      </body>
    </html>
  );
}
