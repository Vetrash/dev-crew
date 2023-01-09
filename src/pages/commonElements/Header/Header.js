import React from 'react';
import './Header.scss';

const Header = () => (
  <div
    className="header--offset
    conteiner__flex-row--space-between
    conteiner--x-center
    conteiner--work-width-page"
  >
    <div className="logo--norm-size">
      <img src="./img/Logo.svg" alt="logo" />
    </div>
    <ul className="conteiner__flex-row--space-between">
      <li className="menu__item">
        <a className="menu__item-text" href="#">
          Home
        </a>
      </li>
      <li className="menu__item menu__item--offset-left">
        <a className="menu__item-text" href="#">
          Categories
        </a>
      </li>
      <li className="menu__item menu__item--offset-left menu__item--dropIcon">
        <a className="menu__item-text " href="#">
          My Collections
        </a>
      </li>
      <li className="menu__item menu__item--offset-left">
        <a className="menu__item-text" href="#">
          Blog
        </a>
      </li>
    </ul>
    <div className="conteiner__flex-row conteiner__flex-row--gap-col-40">
      <button className="btn" type="button">
        Login
      </button>
      <button className="btn btn--active btn--home-size" type="button">
        Sign Up
      </button>
    </div>
  </div>
);

export default Header;
