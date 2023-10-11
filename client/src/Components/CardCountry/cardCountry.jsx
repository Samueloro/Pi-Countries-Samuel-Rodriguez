

export default function CardCountry ({name, image, continent}) {

    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h2>{continent}</h2>
        </div>
    )
}