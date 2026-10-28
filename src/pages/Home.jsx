import '../index.css'
import Card from '../card.jsx'

function Home() {
  return (
    <div className="card-container">
      <Card description="Card 1" link="/sendlist" />
    </div>
  )
}

export default Home;