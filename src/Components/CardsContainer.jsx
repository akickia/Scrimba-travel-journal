import Card from "./Card"
import data from "../data"

export default function CardsContainer() {
  
  const cardEl = data.map((item, i) => {
    return (
    <Card item={item} key={i}/>)
  })

  return (
    <div>
      {cardEl}
    </div>
  )
}
