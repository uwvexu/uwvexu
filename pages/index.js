import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import HeroSection from '../components/HeroSection';
import { HeroTitle, HeroSubtitle, HeroBlock } from '../components/HeroText';
import HeaderSection from '../components/HeaderSection';
import BodySection from '../components/BodySection';
import CenteredSection from '../components/BecomeSponsor';
import Link from '../components/Link';
import { Button, DarkButton } from '../components/Button';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';
import Event from '../components/Event';
import { competitions, awards } from '../stats';
import Form from '../components/Form';
import ImageGrid from '../components/ImageGrid';
import "../main.scss";
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
    <Competitions competitions={competitions} />
    <Awards awards={awards} />
    <Sponsors />
    <BecomeSponsor />
    <Contact />
    <Footer />
  </>
);
