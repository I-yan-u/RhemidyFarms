import Container from '../Components/container';
import Hero from '../Components/Landing/Hero';
import WhatWeDo from '../Components/Landing/WhatWeDo';
import WhyUs from '../Components/Landing/WhyUs';
import CTA from '../Components/Landing/CTA';
import Testimonies from '../Components/Landing/Testimonies';

const Landing = () => {
  return (
    <div>
      <Container>
        <Hero />
        <WhatWeDo />
        <WhyUs />
        <Testimonies />
        <CTA />
      </Container>
    </div>
  );
};

export default Landing;
