import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { competitions, awards } from '../stats';
import WhoWeAre from '../components/WhoWeAre';
import Competitions from '../components/Competitions';
import Awards from '../components/Awards';
import Sponsors from '../components/Sponsors';
import BecomeSponsor from '../components/BecomeSponsor';
import Contact from '../components/Contact';

export default () => (
  <>
    <Hero />
    <WhoWeAre />
    {/* <Competitions competitions={competitions} /> */}
    <Awards awards={awards} />
    <Sponsors />
    <BecomeSponsor />
    <Contact />
    <Footer />
  </>
);
