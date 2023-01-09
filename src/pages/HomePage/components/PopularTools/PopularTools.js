import React from 'react';
import ToolItem from './ToolItem';
import './PopularTools.scss';

const PopularTools = () => (
  <div
    className="
  
  conteiner--x-center
  conteiner--work-width-page"
  >
    <p className="text__title text--center text__tools--title-size text__tools--title-offset">Most Popular Tools</p>
    <p className="text__subTitle text--center text__tools--subtitle-size">
      Tools for the best Designers and Developers most popularly used in the world
    </p>

    <div className="conteiner__flex-row conteiner__flex-row--tool-offset">
      <ToolItem
        img="./img/grommet-icons_figma.svg"
        name="FIGMA"
        payText="Free"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />

      <ToolItem
        img="./img/logos_sketch.svg"
        name="Sketch"
        payText="Trial & Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />

      <ToolItem
        img="./img/logos_visual-studio-code.svg"
        name="Visual Studio Code"
        payText="Free"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />

      <ToolItem
        img="./img/notion.svg"
        name="Notion"
        payText="Free & Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />

      <ToolItem
        img="./img/grommet-icons_slack.svg"
        name="Slack"
        payText="Free & Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />

      <ToolItem
        img="./img/logos_invision-icon.svg"
        name="Invision"
        payText="Free & Paid"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        modClassItem="tools-item--lg-size"
      />
    </div>
    <button type="button" className="btn btn__tools--size btn__tools--decor btn__tools--offset">
      Load more
    </button>
  </div>
);

export default PopularTools;
