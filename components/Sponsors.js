import React from 'react';
import Section from './Section';
import ImageGrid from './ImageGrid';

const Sponsors = () => (
  <Section id="sponsor" title="SPONSORS" rightTitle={true} imagesUnderTitle>
    <ImageGrid
      imageUrls={[['static/sponsors/weef.png'], ['static/sponsors/mef.png'],['static/sponsors/engsoc.png'],
      ['static/sponsors/idesign.jpg'], ['static/sponsors/robohub.png'],['static/sponsors/vex.png'],['static/sponsors/engineering.png']
      ]}
    />
  </Section>
);

export default Sponsors;
