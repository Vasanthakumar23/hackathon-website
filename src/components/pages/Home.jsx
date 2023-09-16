import React from 'react';
import '../../App.css';
// import Timer from '../Timer';
import CountDownTimer from '../CountDown/CountDownTimer';
import Card from '../Card/Card';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <CountDownTimer />
      </div>
      <Card />
      <Card />
      <div>
        <Footer /> 
      </div>

    </>
  );
}

export default Home;