import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Coffees from '../Coffees/Coffees';
import { Link } from 'react-router-dom';
import IconsSection from '../IconsSection/IconsSection';
import FollowInsta from '../FollowInsta/FollowInsta';

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <IconsSection></IconsSection>
      <Coffees></Coffees>
      <FollowInsta></FollowInsta>
    </>
  );
};

export default Home;
