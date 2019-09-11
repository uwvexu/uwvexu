import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import HeroSection from '../components/HeroSection';
import { HeroTitle, HeroSubtitle } from '../components/HeroText';
import HeaderSection from '../components/HeaderSection';
import BodySection from '../components/BodySection';
import CenteredSection from '../components/CenteredSection';
import Link from '../components/Link';
import { Button, DarkButton } from '../components/Button';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';
import Event from '../components/Event';
import ImageGrid from '../components/ImageGrid';

export default () => (
  <div>
    <Hero imageUrl='http://www.innovateli.com/wp/wp-content/uploads/2016/02/IMG_6664-777x437.jpg'>
      <NavBar />
      <HeroSection>
        <HeroTitle>
          LEARN.
          <br />
          BUILD.
          <br />
          COMPETE.
        </HeroTitle>
        <HeroSubtitle>UW VEXU Robotics</HeroSubtitle>
      </HeroSection>
    </Hero>
    <HeaderSection id='about'>WHO WE ARE</HeaderSection>
    <BodySection>
      We’re a team of University of Waterloo students who design, build, and
      program robots to compete at the VEXU World Championships. <br />
      <br /> Each year we build two robots for a different game challenge (you
      can see this year’s game{' '}
      <Link href='https://www.youtube.com/watch?v=_JVQOiw_OUU' external>
        here
      </Link>
      ). Both robots have a 1 minute and 45 second autonomous period, and a 45
      second driver control period.
      <br />
      <br />
      We started this team so that any student could join and learn more about
      robotics. Anyone is welcome to join.
      <br />
      <br />
      <Button href='https://forms.gle/WGnEERX5HZF1xDwb7' external>
        JOIN US
      </Button>
    </BodySection>
    <ImageSection
      imageUrls={[
        'https://guinnessworldrecords.com/Images/Largest-robot-competition-VEX-Worlds_tcm25-426572.jpg',
        'https://msutoday.msu.edu/_/img/assets/2017/robotics-tournament.jpg',
        'https://i.ytimg.com/vi/CDDGBcs0TFM/hqdefault.jpg'
      ]}
    />
    <HeaderSection id='events'>EVENTS</HeaderSection>
    <BodySection>
      <Event month={9} day={19} dayOfWeek='Thursday'>
        Fall 2019 first meeting - all welcome!
      </Event>
      <br />
      <br />
      <Event month={10} day={12} dayOfWeek='Tuesday'>
        Krispe Cream fundraiser - come out to slc and buy a box of donuts to
        help support our team!
      </Event>
      <br />
      <br />
      <Event month={11} day={25} dayOfWeek='Saturday'>
        First competiton - held at the University of Toronto in Carl Polluk
        Hall, our team bus will be leaving at 9am in front of E7
      </Event>
    </BodySection>
    <CenteredSection id='sponsor' imageUrl='http://media2.govtech.com/images/940*529/Starstruck_Vex_Robotics_CV_2017-01-11.jpg'>
      UWaterloo VEXU Robotics would not be possible without the help of our
      genourous sponsors.
      <br />
      <br />
      Interested in becoming a sponsor? <br />
      Click the button below for more information.
      <br />
      <br />
      <DarkButton>BECOME A SPONSOR</DarkButton>
    </CenteredSection>
    <HeaderSection>SPONSORS</HeaderSection>
    <ImageGrid
      imageUrls={[
        'https://uwaterloo.ca/engineering-endowment-fund/sites/ca.engineering-endowment-fund/files/uploads/images/weef_logo_yellow_0.png',
        'https://uwaterloo.ca/math-endowment-fund/sites/ca.math-endowment-fund/files/uploads/images/mef_-_final_logo.png',
        'https://www.engsoc.uwaterloo.ca/wp-content/uploads/2018/01/cropped-EngSoc_Square_Logo-300x300.png',
        'https://www.robotevents.com/uploads/events/33015/d6e8f72b99f4b44b1d27cd636f5d4d73.jpg',
        'https://uwaterloo.ca/robohub/sites/ca.robohub/files/uploads/images/main-robohub-logo-rgb-1000px.png',
        'https://upload.wikimedia.org/wikipedia/en/3/38/Vex-Logo.jpg',
        'http://nserc-hi-am.ca/wp-content/uploads/2018/11/Waterloo_Engineering_logo_rgb-1-e1542983138323.png'
      ]}
    />
    <HeaderSection id='contact'>CONTACT US</HeaderSection>
    <Footer />
  </div>
);
