
import '../stylesheets/Card.css'
function Card({cp, imgSrc, imgAlt,pokemonName,pokemonType}){
    return(
        <div className="card">
            <header className="card_header">
                <div className="cp-container">
                    <span><small>CP</small>{cp}</span>
                </div>
                <div className="img-pokemon-container">
                    <img src ={imgSrc} alt = {imgAlt} />
                </div>
                <div className="name-pokemon-container">
                    <h2>{pokemonName}</h2>
                </div>
            </header>
            <section>
                <div className="data-container">
                    
                        <div className="type-container">
                            <span>
                                Types
                            </span>
                            <div>
                                <span>{pokemonType}</span>
                            </div>
                        </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Card