import React from 'react';
import './Brand.scss';

const Brand = () => (
  <div
    className="
    conteiner__brand--offset
    conteiner--x-center
    conteiner--work-width-page"
  >
    <p className="text__title--brand text__title">Trusted more than 150+ brand</p>
    <div className="conteiner__flex-row conteiner__flex-row--brand-offset conteiner__flex-row--brand-gap">
      <img src="./img/logos_microsoft.svg" alt="Microsoft" />
      <img src="./img/logos_google.svg" alt="Google" />
      <img src="./img/logos_slack.svg" alt="Slack" />
      <img src="./img/logos_wordpress.svg" alt="WordPress" />
    </div>
    <div className="glass">
      <div className="glass__brand" />
      <div className="glass__brand--light" />
      <div className="glass__brand--border" />
    </div>
  </div>
);

export default Brand;
