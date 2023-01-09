import React from 'react';
import './Join.scss';

const Join = () => (
  <div className="
  conteiner--x-center
  conteiner__join--size
  conteiner__join--offset"
  >
    <p className="text__title  text__title--join-style text--center">Become a contributor?</p>
    <p className="text__subTitle text__subTitle--join-style text--center text__subTitle--join-offset">
      Join us and get tips & tricks to become a great Designer and Developer
    </p>
    <div className="input-block input-block__join--size input-block__join--offset">
      <input className="input-block__input-space input-block__input-space--join-offset" type="text" placeholder="Enter your email..." />
      <button type="button" className="btn btn--join-size btn--join-offset btn--active">Join Us</button>
    </div>
  </div>
);
export default Join;
