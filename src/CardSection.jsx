import { Fragment } from 'react';
import './CardSection.scss';
import CardItem from './components/CardItem/CardItem';

const cardItem =[
    {
        id: 1,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "10 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        
    },
    {
        id: 2,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "10 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        "disabled": true
    },
    {
        id: 3,
        "caption": "Сказочное заморское яство",
        "title": "Нямушка",
        "subtitle": "с фуа-гра",
        "description": "10 порций мышь в подарок",
        "weight": "2,0",
        "img": "/images/cat.png",
        "disabled": true
    },
    {
        id: 4,
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
    return(
        <div className='card__block'>
            <div className='container'>
                <div className='card__inner'>
                    {cardItem.map((item)=>{
                        return (
                            <Fragment key={item.id}>
                                <CardItem  
                                caption={item.caption}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                weight={item.weight}
                                img={item.img}/>    
                            </Fragment>
                        )
                    })}
                    
                    
                    
                   
                </div>        
            </div>
        </div>
    )
}