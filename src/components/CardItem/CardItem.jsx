import { useState } from "react";
import "./CardItem.scss";

export default function Card({ item, onCheckItem, onUncheckItem }) {
  const [checked, setChecked] = useState(true);

  const HandleCheck = (item) => {
    setChecked((checked) => !checked);
    if (checked & !item.disabled) {
      onCheckItem(item);
    }
    if (!checked & !item.disabled) {
      onUncheckItem(item);
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

  return (
    <div className="card__item">
      <div
        className={
          item.disabled ? "card__disabled" : !checked ? "card__checked" : "card"
        }
        onClick={() => HandleCheck(item)}
      >
        <div className="card__content">
          <div className="card__content__block">
            <span className="card__caption">{item.caption}</span>
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
          <img className="card__img" src={item.img} alt="Cat" />
        </div>
      </div>
      {textBellow}
    </div>
  );
}
