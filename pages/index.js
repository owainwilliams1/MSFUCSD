import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>MSF UCSD</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Doctors without borders chapter at UCSD."
        />
        <meta
          name="keywords"
          content="msf, dwb, doctors, borders, doctors without borders, chapter, ucsd, club"
        />
        <meta name="author" content="Owain Williams" />
        <meta property="og:image" content="icon-512x512.png" />
        <meta
          property="og:description"
          content="Doctors without borders chapter at UCSD."
        />
        <meta property="og:title" content="MSF UCSD" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="MSF UCSD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <div id="why">
        <Benefits data={benefitOne} />
      </div>
      <div id="testimonials">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our members have said"
        />
        <Testimonials />
      </div>
      <div id="faq">
        <SectionTitle
          id="faq"
          pretitle="FAQ"
          title="Frequently Asked Questions"
        />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Home;
