import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [mtgCards, setMTGCards] = useState([])


  useEffect(() => {
    // fetch('https://api.magicthegathering.io/v1/cards')
    //   .then(res => res.json())
    //   .then(data => setMTGCards(data.cards))
  }, [])


  useEffect(() => {
    console.log(mtgCards)
  }, [mtgCards])

  const renderedCards = mtgCards?.map(card => 
  <div className='card'>
    <div>{card.name}</div>
    <img src={card.imageUrl}></img>
  </div>)

  return (
    <div>
      {renderedCards}
    </div>
  )
}

export default App
