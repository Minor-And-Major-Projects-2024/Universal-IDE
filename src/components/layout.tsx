import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Roboto+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.body}>{children}</div>
    </>
  );
}
