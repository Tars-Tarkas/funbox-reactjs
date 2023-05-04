import * as React from "react";
import { useState } from "react";
import "./CardItem.scss";
import { ICardItem } from "../../types/types";

interface ICard {
  item: ICardItem;
  onCheckItem: (item: any) => void;
  onUncheckItem: (item: any) => void;
}

const Card: React.FC<ICard> = (props): JSX.Element => {
  const { item, onCheckItem, onUncheckItem } = props;
  const [checked, setChecked] = useState(true);
  const [mouseEnter, setMouseEnter] = useState(false);

  const HandleCheck = (item: ICardItem) => {
    setChecked((checked) => !checked);
    if (checked && !item.disabled) {
      onCheckItem(item);
      setMouseEnter(true);
    }
    if (!checked && !item.disabled) {
      onUncheckItem(item);
      setMouseEnter(false);
    }
  };

  const textBellow = item.disabled ? (
    <p className="card__bellow__disabled">
      Печалька, {item.subtitle} закончился.
    </p>
  ) : !checked ? (
    <p className="card__bellow">{item.selected_text}</p>
  ) : (
    <p className="card__bellow">
      Чего сидишь? Порадуй котэ,&nbsp;
      <span className="card__bellow__pay" onClick={() => HandleCheck(item)}>
        купи.
      </span>
    </p>
  );

  const mouseIn = () => {
    setMouseEnter(true);
  };

  const mouseOut = () => {
    setMouseEnter(false);
  };

  return (
    <div className="card__item">
      <div
        className={
          item.disabled ? "card__disabled" : !checked ? "card__checked" : "card"
        }
        onClick={() => HandleCheck(item)}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        <div className="card__content">
          <div className="card__content__block">
            <span
              className={
                checked || item.disabled
                  ? "card__caption"
                  : mouseEnter && !checked
                  ? "card__caption__hover"
                  : "card__caption"
              }
            >
              {checked || item.disabled
                ? item.caption
                : mouseEnter && !checked
                ? "Котэ не одобряет?"
                : item.caption}
            </span>
            <span className="card__title">{item.title}</span>
            <span className="card__subtitle">{item.subtitle}</span>
            <span className="card__portions">
              {item.portions}&nbsp;
              <span className="card__portions__text">порций</span>
            </span>
            <span className="card__gift">
              {item.gift_count ? item.gift_count : null}
              <span className="card__gift__text">&nbsp;{item.gift}</span>
            </span>
          </div>
          <span className="card__weight">
            {item.weight} <span className="card__unit">кг</span>{" "}
          </span>
          <img
            className="card__img"
            src={process.env.PUBLIC_URL + item.img}
            alt="Cat"
          />
        </div>
      </div>
      {textBellow}
    </div>
  );
};



export default Card;
