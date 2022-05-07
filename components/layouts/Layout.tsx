import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui/Navbar';

type Props = { title?: string };

const origin = !(typeof window === 'undefined') ? window.origin : '';

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'Pokemon App',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Fernando Herrera' />
        <meta
          name='description'
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta
          property='og:title'
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property='og:description'
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/icon.jpeg`} />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main
        style={{
          margin: '0 2rem',
        }}>
        {children}
      </main>
    </>
  );
};
