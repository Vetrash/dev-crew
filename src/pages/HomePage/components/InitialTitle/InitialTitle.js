import React from 'react';
import './InitialTitle.scss';

const InitialTitle = () => (
  <div
    className="
    initial-title--offset
    conteiner--x-center
    conteiner--relative
    conteiner--work-width-page"
  >
    <p className="text__title">Awesome tools for</p>
    <p className="text__title">
      Designer & Developer
      <span className="text--orangeText">.</span>
    </p>
    <p className="text__subTitle text__subtitle--initial-size text__subtitle--initial-offset">
      Antool is a web collection of information on paid or free Design and Development tools
    </p>
    <div className="input-block input-block--offset-search input-block--search-size">
      <img className="input-block__search-icon--offset " src="./img/search.svg" alt="search" />
      <input className="input-block__input-space" type="text" placeholder="find more than 430+ tools..." />
      <button type="button" className="btn btn--search-size btn--search-offset btn--active">
        Search
      </button>
    </div>
    <div className="socWeb--offset">
      <a className="socWeb__item--offset" href="https://www.facebook.com/">
        <img className="socWeb__icon--size" src="./img/facebook.svg" alt="Facebook" />
      </a>
      <a className="socWeb__item--offset" href="https://instagram.com/">
        <img className="socWeb__icon--size" src="./img/instagram.svg" alt="Instagram" />
      </a>
      <a className="socWeb__item--offset" href="https://twitter.com/">
        <img className="socWeb__icon--size" src="./img/twitter.svg" alt="Twitter" />
      </a>
    </div>
    <img className="abs_Illustration" src="./img/Illustration.svg" alt="Illustration" />
  </div>
);

export default InitialTitle;
