import { Fragment, useState } from 'react';
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
        "disabled": false
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
 
    const [addProduct, setAddProduct]=useState([]);

    const HandleAddProduct=(id)=>{
        const addItems=cardItem.filter(item=>item.id===id)
        setAddProduct(addItems)
        console.log(addItems)
    }

    return(
        <div className='card__block'>
            <div className='container'>
                <div className='card__inner'>            
                    {cardItem.map((item)=>{
                        return ( 
                            <Fragment key={item.id}> 
                                <CardItem
                                HandleAddProduct={HandleAddProduct}
                                item={CardItem}
                                id={item.id}
                                caption={item.caption}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                weight={item.weight}
                                img={item.img} 
                                disabled={item.disabled}/>
                            </Fragment>
                        )
                    })}
                </div>        
            </div>
        </div>
    )
}