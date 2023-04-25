import About from '@/Components/About/About';
import Details from '@/Components/Details/Details';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import Products from '@/Components/Products/Products';
import Review from '@/Components/Review/Review';
import Social from '@/Components/Social/Social';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Coffe</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Details />
        <Products />
        <About />
        <Social />
        <Review />
        <Footer />
      </main>
    </>
  )
}
