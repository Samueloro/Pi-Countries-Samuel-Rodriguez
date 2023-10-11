

export default function CardCountry ({name, image, continent}) {

    return(
        <div>
            <h2>Country: {name}</h2>
            <h2>From: {continent}</h2>
            <img src={image} alt={name}/>
        </div>
    )
}