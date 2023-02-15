import { useState } from "react"
import "./CardItem.scss"

export default function Card({item, onCheckItem, onUncheckItem}){
    const [checked, setChecked]=useState(true);       

    const HandleCheck=(item)=>{        
        setChecked(checked=>!checked);          
        if(checked & !item.disabled){
            onCheckItem(item)            
        } 
        if(!checked & !item.disabled){
            onUncheckItem(item)
        }            
    }     


    return(         
             <div className={item.disabled ? 'card__disabled' : !checked ? 'card__checked' : 'card'} onClick={()=>HandleCheck(item)}>                                
                <div className='card__content' >  
                    <div className="card__content__block">
                        <span className="card__caption">{item.caption}</span>
                        <span className="card__title">{item.title}</span>
                        <span className="card__subtitle">{item.subtitle}</span>
                        <p className="card__descriprion">{item.description}</p>                                         
                    </div>
                    <span className="card__weight">{item.weight} <span className="card__unit">кг</span> </span>
                    <img className="card__img" src={item.img} alt="Cat" /> 
                </div>
            </div>       
           
    )
}