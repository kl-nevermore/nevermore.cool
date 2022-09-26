import type { AppProps } from 'next/app';
import 'windi.css';
import '../styles/global.css';
import Layout from '../layout';

function Root({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Root;
