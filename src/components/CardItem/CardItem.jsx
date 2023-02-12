import { useState } from "react"
import "./CardItem.scss"

export default function Card({item, HandleCheckCard}){
    const [checked, setChecked]=useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    
    

    const HandleCheck=(e, item)=>{
        e.preventDefault();
        setChecked(!checked);     
        if (checked){
            // const addItems = checkedItems.filter(value=>value.id === item.id)
            setCheckedItems([...checkedItems, item]);  
            // HandleCheckCard([item])
        }else{
            return null
        }
        console.log(checkedItems)
    }  
    

    return( 
             <div className={item.disabled ? 'card__disabled' : checked ? 'card__checked' : 'card'}>                
                {/* <input disabled={item.disabled} type="checkbox" id="checkbox" defaultChecked={item.disabled ? false : checked} /> */}
                <input type="checkbox" id="checkbox" onClick={(e, i)=>HandleCheck(e, item)}/>
                <label htmlFor="checkbox" className='card__content' >  
                    <div className="card__content__block">
                        <span className="card__caption">{item.caption}</span>
                        <span className="card__title">{item.title}</span>
                        <span className="card__subtitle">{item.subtitle}</span>
                        <p className="card__descriprion">{item.description}</p>                                         
                    </div>
                    <span className="card__weight">{item.weight} <span className="card__unit">кг</span> </span>
                    <img className="card__img" src={item.img} alt="Cat" /> 
                </label>
            </div>       
           
    )
}