import React from 'react';
import './NewComer.scss';
import ToolItem from '../PopularTools/ToolItem';

const NewComer = () => (
  <div className="
  conteiner__newcomer--offset
  conteiner__flex-row
  conteiner--x-center
  conteiner--work-width-page"
  >
    <div className="half-block">
      <p className="text__title text__title--newcomer ">Newcomer Tools</p>
      <p className="text__subTitle text__subTitle--newcomer text__subTitle--newcomer-offset">
        Wow! see the latest update of the most recommended
        tools from reliable designers and developers
      </p>
      <button type="button" className="btn btn--active btn__newcomer--size btn__newcomer--offset">Explore more</button>
    </div>
    <div className="conteiner__flex-row conteiner__flex-row--newcomer-offset half-block">
      <ToolItem
        img="./img/zeplin.svg"
        name="Zeplin"
        payText="Free & Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lt-size"
      />

      <ToolItem
        img="./img/jb_phpstorm.svg"
        name="PHPStorm"
        payText="Free"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lt-size"
      />

      <ToolItem
        img="./img/jb_toolbox_app.svg"
        name="Toolbox"
        payText="Free"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lt-size"
      />

      <ToolItem
        img="./img/procreate.svg"
        name="Procreate"
        payText="Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lt-size"
      />
    </div>
  </div>
);

export default NewComer;
