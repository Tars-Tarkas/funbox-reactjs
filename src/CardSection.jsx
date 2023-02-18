import { useState } from "react";
import "./CardSection.scss";
import CardItem from "./components/CardItem/CardItem";

const cardItem = [
  {
    id: 1,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с фуа-гра",
    gift: "мышь в подарок",
    gift_count: 0,
    portions: 10,
    weight: "0,5",
    img: "./images/cat.png",
    selected_text: "Печень утки разварная с артишоками.",
    disabled: false,
  },
  {
    id: 2,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с рыбой",
    gift: "мышь в подарок",
    gift_count: 2,
    portions: 40,
    weight: "2,0",
    img: "./images/cat.png",
    selected_text: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disabled: false,
  },
  {
    id: 3,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с курой",
    gift: "мышей в подарок заказчик доволен",
    gift_count: 5,
    portions: 100,
    weight: "5",
    img: "./images/cat.png",
    selected_text: "Филе из цыплят с трюфелями в бульоне.",
    disabled: true,
  },
  {
    id: 4,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с фуа-гра",
    gift: "мышей в подарок заказчик доволен",
    gift_count: 5,
    portions: 100,
    weight: "2,0",
    img: "./images/cat.png",
    disabled: true,
  },
  {
    id: 5,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с фуа-гра",
    gift: "мышь в подарок",
    gift_count: 0,
    portions: 10,
    weight: "0,5",
    img: "./images/cat.png",
    selected_text: "Печень утки разварная с артишоками.",
    disabled: false,
  },
  {
    id: 6,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с рыбой",
    gift: "мыши в подарок",
    gift_count: 2,
    portions: 40,
    weight: "2,0",
    img: "./images/cat.png",
    selected_text: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disabled: false,
  },
  {
    id: 7,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с курой",
    gift: "мышей в подарок заказчик доволен",
    gift_count: 5,
    portions: 100,
    weight: "5",
    img: "./images/cat.png",
    selected_text: "Филе из цыплят с трюфелями в бульоне.",
    disabled: false,
  },
  {
    id: 8,
    caption: "Сказочное заморское яство",
    title: "Нямушка",
    subtitle: "с фуа-гра",
    gift: "мышей в подарок заказчик доволен",
    gift_count: 5,
    portions: 100,
    weight: "2,0",
    img: "./images/cat.png",
    disabled: true,
  },
];

export default function CardSection() {
  const [checkedItems, setCheckedItems] = useState([]);

  function handleCheckItem(item) {
    setCheckedItems((previousState) => {
      return [...previousState, item];
    });
  }

  function handleUncheckItem(item) {
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
