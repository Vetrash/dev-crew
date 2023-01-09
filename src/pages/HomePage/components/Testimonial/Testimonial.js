import React from 'react';
import './Testimonial.scss';

const Testimonial = () => (
  <div
    className="
    conteiner__testimonial--offset
    conteiner--x-center
    conteiner--work-width-page"
  >
    <div className="slider">
      <div className="slider--gap conteiner__flex-row conteiner--x-center">
        <div className="slider__arrow">
          <img className="item--pointer" src="./img/chevron-left.svg" alt="left" />
          <img
            className="item--pointer item--blink"
            src="./img/chevron-left-active.svg"
            alt="left"
          />
        </div>
        <div className="slider__content">
          <div className="slider__slide">
            <div className="person">
              <img className="person__photo" src="./img/person.png" alt="person" />
              <div className="person__info">
                <div className="table table__person--offset">
                  <p className="table__name">Ronald Richards</p>
                  <p className="table__position">Product Manager</p>
                  <div className="glass__table--glass" />
                  <div className="glass__table--light" />
                  <div className="glass__table--border" />
                </div>
              </div>
            </div>
            <div className="slider__slide-text slider__slide-text--size">
              <img className="slider__slide-text--decor" src="./img/decorText.svg" alt="decor" />
              <p className="slider__slide-text--font-stile">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do.
                Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt
                Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
              </p>
            </div>
          </div>
        </div>
        <div className="slider__arrow">
          <img className="item--pointer item--blink" src="./img/chevron-right.svg" alt="right" />
          <img className="item--pointer" src="./img/chevron-right-active.svg" alt="right" />
        </div>
      </div>
      <div className="slider__navbar slider__navbar--testimonial-offset">
        <div className="slider__navbar--inactive" />
        <div className="slider__navbar--active" />
        <div className="slider__navbar--inactive" />
      </div>
    </div>
  </div>
);

export default Testimonial;
