import './card.css'

function Card(props) {
  return (
    <a className ="card" href={props.link} draggable="false" style={{ '--card-size': '256px' }}>
      <img src="public/card.png" draggable={false} />
      <img src="/card-hover.png" alt="" draggable={false} className="hover-img" />
      <p className="card-text">{props.description}</p>
    </a>
  );
}

export default Card;