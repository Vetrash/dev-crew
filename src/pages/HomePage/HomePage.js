import React from 'react';
import Header from '../commonElements/Header/Header';
import './HomePage.scss';
import InitialTitle from './components/InitialTitle/InitialTitle';
import PopularTools from './components/PopularTools/PopularTools';
import Brand from './components/Brand/Brand';
import NewComer from './components/NewComer/NewComer';
import Testimonial from './components/Testimonial/Testimonial';
import Join from './components/Join/Join';
import Footer from '../commonElements/Footer/Footer';

const HomePage = () => (
  <>
    <Header />
    <InitialTitle />
    <PopularTools />
    <Brand />
    <NewComer />
    <Testimonial />
    <Join />
    <Footer />
  </>
);

export default HomePage;
