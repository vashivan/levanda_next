import { useState } from 'react';
import MainPage from '../Components/MainPage/MainPage';
import trainersList from '../Info/trainers.json';

const Home = () => {
  return (
    <>
      <MainPage trainers={trainersList} />
    </>
  );
};

export default Home;