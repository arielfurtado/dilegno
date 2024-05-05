import Head from 'next/head';
import { Raleway } from 'next/font/google';
import '../app/globals.scss';

const ralewayFont = Raleway({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={ralewayFont.className}>{children}</div>
    </>
  );
}
