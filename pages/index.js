import NavBar from '../components/NavBar';
import HeaderSection from '../components/HeaderSection';
import BodySection from '../components/BodySection';
import TextBox from '../components/TextBox';
import Link from '../components/Link';
import Button from '../components/Button';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';
import Event from '../components/Event';

export default () => (
  <div>
    <NavBar />
    <HeaderSection>WHO WE ARE</HeaderSection>
    <BodySection>
      <TextBox>
        We’re a team of University of Waterloo students who design, build, and
        program robots to compete at the VEXU World Championships. <br />
        <br /> Each year we build two robots for a different game challenge (you
        can see this year’s game{' '}
        <Link href='https://www.youtube.com/watch?v=_JVQOiw_OUU' external>
          here
        </Link>
        ). Both robots have a 1 minute and 45 second autonomous period, and a 45
        second driver control period. <br />
        <br /> We started this team so that any student could join and learn
        more about robotics. Anyone is welcome to join.
      </TextBox>
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
    <HeaderSection>EVENTS</HeaderSection>
    <BodySection>
      <Event month={9} day={19} dayOfWeek='Thursday'>
        Fall 2019 first meeting - all welcome!
      </Event>
      <br />
      <br />
      <Event month={10} day={12} dayOfWeek='Tuesday'>
        Krispe Cream fundraiser- come out to slc and buy a box of donuts to help
        support our team!
      </Event>
      <br />
      <br />
      <Event month={11} day={25} dayOfWeek='Saturday'>
        First competiton - held at the University of Toronto in Carl Polluk
        Hall, our team bus will be leaving at 9am in front of E7
      </Event>
    </BodySection>
    <Footer />
  </div>
);
