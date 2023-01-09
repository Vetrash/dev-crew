import React, { useState } from 'react';
import './ToolItem.scss';
import cn from 'classnames';

const ToolItem = (props) => {
  const { img, name, payText, info, modClassItem } = props;
  const [isHover, setHover] = useState(false);
  const [isLike, setLike] = useState(false);
  const urlActiveLike = '../../../../img/flat-color-icons_like_active.svg';
  const urlAnactiveLike = '../../../../img/flat-color-icons_like.svg';

  return (
    <div
      className={`tools-item ${modClassItem}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="tools-item--offset">
        <div className="conteiner__flex-row">
          <img className="tools-item__icon--size tools-item__icon--offset " src={img} alt={name} />
          <div>
            <p className={cn('tools-item__name', { 'tools-item__name--active': isHover })}>
              {name}
            </p>
            <p className={cn('tools-item__pay', { 'tools-item__pay--active': isHover })}>
              {payText}
            </p>
          </div>
        </div>
        <p className={cn('tools-item__info', { 'tools-item__info--active': isHover })}>{info}</p>
        <div className="conteiner__flex-row conteiner__flex-row--space-between tools-item__footer--offset">
          <div className="conteiner__flex-row ">
            <button
              type="button"
              className={cn('tools-item__like', { 'tools-item__like--active': isLike })}
              onClick={() => setLike(!isLike)}
            >
              <img src={isLike ? urlActiveLike : urlAnactiveLike} alt="like" />
            </button>
            <img
              className="tools-item__add-outline"
              src="./img/eva_folder-add-outline.svg"
              alt="add-outline"
            />
          </div>
          <button
            className={cn('btn__item--size', 'btn', { 'btn--active': isHover })}
            type="button"
          >
            Visit
          </button>
        </div>

        <div className={cn('glass', 'item--blink', { 'item--showblock': isHover })}>
          <div className="glass__tool-item" />
          <div className="glass__tool-item--light" />
          <div className="glass__tool-item--border" />
        </div>
      </div>
    </div>
  );
};
export default ToolItem;
