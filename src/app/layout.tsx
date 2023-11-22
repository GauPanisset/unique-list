import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
