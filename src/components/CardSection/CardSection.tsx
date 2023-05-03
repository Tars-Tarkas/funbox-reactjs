import * as React from "react";
import { useState } from "react";
import "./CardSection.scss";
import CardItem from "../CardItem/CardItem";
import { ICardItem } from "../../types/types";

import cardItem from "../../data.json";

export default function CardSection() {
  const [checkedItems, setCheckedItems] = useState<ICardItem[]>([]);

  function handleCheckItem(item: ICardItem) {
    setCheckedItems((previousState) => {
      return [...previousState, item];
    });
  }

  function handleUncheckItem(item: ICardItem) {
    setCheckedItems((previousState) => {
      return previousState.filter((checkedItem) => {
        return checkedItem !== item;
      });
    });
  }

  return (
    <div className="card__section">
      <div className="container">
        <span className="card__section__title">Ты сегодня покормил кота?</span>
        <div className="card__inner">
          {cardItem.map((item) => {
            return (
              <CardItem
                key={item.id}
                item={item}
                onCheckItem={handleCheckItem}
                onUncheckItem={handleUncheckItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
