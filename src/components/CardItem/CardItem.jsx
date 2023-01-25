import "./CardItem.scss"

export default function Card({caption, title, subtitle, description, weight, img}){

    const HandleChecked=(e)=>{
        console.log(e.target.checked);
    }
    return(
        <div className="card">                    
            <input type="checkbox" id="checkbox" className="card__checked" onClick={HandleChecked}/>
            <label className="card__content" htmlFor="checkbox">
                <label>{caption}</label>
                <label>{title}</label>
                <label>{subtitle}</label>
                <p>{description}</p>
                <img className="card__img" src={img} alt="Cat" />                     
            </label> 
                   
            
        </div>
    )
}