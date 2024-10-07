import { AppProps } from 'next/app';
import Head from 'next/head'; // Імплементація Head
import { useState } from 'react';
import '../styles/globals.css'; // Глобальні стилі
import '../Components/Footer/Footer.scss'; // Стилі для футера
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import StartPage from '../Components/StartPage/StartPage';

function MyApp({ Component, pageProps }: AppProps) {
  const [startPageOn, setStartPageOn] = useState(true);

  const closeStartPage = () => {
    setStartPageOn(false);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>
      {startPageOn ? (
        <StartPage closePage={closeStartPage} />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
