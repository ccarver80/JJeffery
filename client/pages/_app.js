
import "../styles/globals.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    
    <div className="bg-woodBox bg-center bg-cover ">
    <Head>
      <title>IB Lazy J</title>  
    </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
