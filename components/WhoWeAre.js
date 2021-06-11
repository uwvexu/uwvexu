import React from 'react';
import Section from './Section';
import Link from './Link';
import { Button } from './Button';
import { yellow } from './Styles'

const WhoWeAre = () => (
  <Section id="about" title="WHO WE ARE" bg={yellow}>
      <p>
        The UWAT VEX U Robotics team designs, builds and programs robots to compete in the international 
        VEX U Robotics competition. Every season a new challenge is announced in which over 300 teams 
        spend the year constructing, optimising and competing against each other. These robots are 
        capable of precise object manipulation, visual object detection, unaided autonomous motion 
        and navigation, driver-assisted remote operation, and much more. You can check out this years 
        competition game{' '}
        <Link href='https://www.youtube.com/watch?v=H8XcvADUXTE' external ybg>
          here
        </Link>.
        <br />
        <br />
        UWAT VEX U strives to push the boundaries of robotics by implementing various manufacturing 
        techniques, advanced software control algorithms and sensor integrations combining all 
        engineering disciplines. Our team welcomes new students with and without prior competitive 
        robotics experience!
        <br />
        <br />
        <Button href='https://forms.gle/XppdTP3Vh5YnYyHJA' external>
          JOIN US
        </Button>
      </p>
    </Section>
);

export default WhoWeAre;
