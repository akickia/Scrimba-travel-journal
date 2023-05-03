

export default function Card({ item} ) {
  const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = item
  return (
    <article className="card"> 
      <img src={imageUrl}></img>
      <section>      
        <div>
          <img src="mapIcon.png" />
          <h2>{location}</h2>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <div>
          <h3>{startDate} - </h3>
          <h3>{endDate}</h3>
        </div>
        <p>{description}</p>
      </section>
      <hr></hr>
    </article>
  )
}
