import React from 'react';
import Section from './Section';
import Link from './Link';
import { Button } from './Button';
import { yellow } from './Styles'

const WhoWeAre = () => (
  <Section id="about" title="WHO WE ARE" bg={yellow}>
      <p>We’re a team of University of Waterloo students who design, build, and program robots to compete at the VEX U World Championships.
      <br />
      <br />
      Each year we build two robots for a different game challenge (you can see this year’s game{' '}
      <Link href='https://www.youtube.com/watch?v=Hxs0q9UoMDQ&ab_channel=VEXRobotics' external ybg>
        here
      </Link>). Both robots have a 1 minute and 45 second autonomous period, and a 45 second driver control period.
      <br />
      <br />
      We started this team so that any student could come and learn about robotics! Anyone is welcome to join.
      <br />
      <br />
      <Button href='https://bit.ly/3pCGxWD' external>
        JOIN US
      </Button>
      </p>
    </Section>
);

export default WhoWeAre;
