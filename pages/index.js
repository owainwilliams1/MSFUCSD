import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import { WavyBackground } from "../components/wavy-background";

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

      <WavyBackground waveWidth="20" waveOpacity="0.2">
        <Navbar />
        <Hero />
      </WavyBackground>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
