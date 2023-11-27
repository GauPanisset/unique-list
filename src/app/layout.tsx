import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/technical/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Ma liste',
  description:
    'Liste un peu chouette contenant uniquement des éléments différents.',
};

type Props = { children: React.ReactNode };

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
