import './card.css'
import card from "./assets/card.png"
import cardHover from "./assets/card-hover.png"
import { Link } from 'react-router'

function Card(props) {
  return (
    <Link className ="card" to={props.link} draggable="false" style={{ '--card-size': '200px' }}>
      <img src={card} draggable={false} />
      <img src={cardHover} alt="" draggable={false} className="hover-img" />
      <p className="card-text">{props.description}</p>
    </Link>
  );
}

export default Card;