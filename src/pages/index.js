import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zap !</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Zap website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*<Header />*/}
      <About />
      {/*<Projects />*/}
      <Contact />
      <Footer />
    </>
  );
}