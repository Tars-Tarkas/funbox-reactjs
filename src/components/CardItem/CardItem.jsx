import { useState } from "react"
import "./CardItem.scss"

export default function Card({HandleAddProduct, caption, title, subtitle, description, weight, img, disabled}){
    const [checked, setChecked]=useState(false)

    const HandleCheck=(e)=>{
        e.preventDefault();
        setChecked(!checked);       
    }

    return(
             <div className={checked ? 'card__checked' : 'card'}>
                <input type="checkbox" id="checkbox" className="card__checkbox"/>
                <label htmlFor="checkbox" className={disabled ? 'card__disabled' : 'card__content'}  onClick={e=>HandleCheck(e)}>  
                    <div className="card__content__block">
                        <span className="card__caption">{caption}</span>
                        <span className="card__title">{title}</span>
                        <span className="card__subtitle">{subtitle}</span>
                        <p className="card__descriprion">{description}</p>
                        <span className="card__weight">{weight} <span className="card__unit">кг</span> </span>
                        <img className="card__img" src={img} alt="Cat" />                    
                    </div>
                </label>
            </div>       
           
    )
}