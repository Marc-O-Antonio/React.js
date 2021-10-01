import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} image={infoContent.imageSource}/>
    <div>
      {infoContent.content}
    </div>
  </Container>
);

export default Info;