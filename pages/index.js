import NavBar from '../components/NavBar';
import SectionHeader from '../components/SectionHeader';
import SectionBody from '../components/SectionBody';
import TextBox from '../components/TextBox';
import Link from '../components/Link';
import Button from '../components/BodyButton';
import ImageSection from '../components/ImageSection';

export default () => (
  <div>
    <NavBar />
    <SectionHeader>WHO WE ARE</SectionHeader>
    <SectionBody>
      <TextBox>
        We’re a team of University of Waterloo students who design, build, and
        program robots to compete at the VEXU World Championships. <br />
        <br /> Each year we build two robots for a different game challenge (you
        can see this year’s game <Link onClick={() => alert('Hi!')}>here</Link>
        ). Both robots have a 1 minute and 45 second autonomous period, and a 45
        second driver control period. <br />
        <br /> We started this team so that any student could join and learn
        more about robotics. Anyone is welcome to join.
      </TextBox>
      <br />
      <br />
      <Button>JOIN US</Button>
    </SectionBody>
    <ImageSection
      imageUrls={[
        'https://guinnessworldrecords.com/Images/Largest-robot-competition-VEX-Worlds_tcm25-426572.jpg',
        'https://msutoday.msu.edu/_/img/assets/2017/robotics-tournament.jpg',
        'https://i.ytimg.com/vi/CDDGBcs0TFM/hqdefault.jpg'
      ]}
    />
  </div>
);
