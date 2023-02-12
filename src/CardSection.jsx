
import { useState } from 'react';
import './CardSection.scss';
import CardItem from './components/CardItem/CardItem';

const cardItem=[
    {
        "id": 1,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "10 порций мышь в подарок",
        "weight": "0,5",
        "img": "/images/cat.png",        
        "disabled": false        
    },
    {
        "id": 2,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "20 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        "disabled": false
    },
    {
        "id": 3,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "30 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        "disabled": true
    },
    {
        "id": 4,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "10 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        "disabled": true
    }
];

export default function CardSection(){   
 
    // const [checkedItems, setCheckedItems] = useState([]);

    // const HandleCheck=(item)=>{        
    //     const addItems = item.filter(value=>value.id === item.id)
    //     setCheckedItems([...checkedItems, item]);  
    // }
    // console.log(checkedItems)

    return(
        <div className='card__block'>
            <div className='container'>
                <div className='card__inner'>            
                    {cardItem.map((item)=>{
                        return (                             
                                <CardItem
                                key={item.id}
                                item={item}
                                // HandleCheckCard={HandleCheck}
                               />           
                        )
                    })}
                </div>        
            </div>
        </div>
    )
}