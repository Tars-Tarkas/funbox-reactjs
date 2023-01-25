import "./CardItem.scss"

export default function Card({caption, title, subtitle, description, weight, img}){
    return(
        <div className="card">
            <div className="card__item">
                <span>{caption}</span>
                <span>{title}</span>
                <span>{title}</span>
                <p>{description}</p>
                <span>{title}</span>
                <img className="card__img" src={img} alt=""/>
            </div>
        </div>
    )
}