
import "./card.styles.css"


const Card=({monster})=>{
    
        const{id,name,email}=monster
        return(
            <div className="card-container" key={id}>
            <img
              alt={`monster${name}`}
              src={`https://robohash.org/${id}&size=180*180`}
            />
            <h2>{name}</h2>
            <h3>{email}</h3>
          </div>
        )
    }
export default Card
