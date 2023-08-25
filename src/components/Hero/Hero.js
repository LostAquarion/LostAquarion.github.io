import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopaddind>
  <LeftSection>
    <SectionTitle>
      Hi, my name is Melvin Ensah <br/>
      Web Developer.<br/>
      This is my Personal Portfolio
    </SectionTitle>
    <SectionText>
      blank for now
    </SectionText>
    <Button onClick={()=> window.location = 'https://facebook.com'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;