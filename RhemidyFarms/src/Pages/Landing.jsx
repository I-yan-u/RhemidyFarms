import Container from '../Components/container';
import Hero from '../Components/Landing/Hero';
import WhatWeDo from '../Components/Landing/WhatWeDo';
import WhyUs from '../Components/Landing/WhyUs';

const Landing = () => {
  return (
    <div>
      <Container>
        <Hero />
        <WhatWeDo />
        <WhyUs />
      </Container>
    </div>
  );
};

export default Landing;
