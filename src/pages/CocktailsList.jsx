import React from 'react'
import magic from './CocktailsList.module.css'
import {Link} from 'react-router-dom'
import like from '../assets/like.png'
const CocktailsList = () => {

    const [cocktails , setCocktails] = React.useState([])

    React.useEffect (() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => { setCocktails(data.drinks)})},[])
    return (
        <div className={magic.cocktailsListWrapper}>
            <div className={magic.container}>
                <div className={magic.title}>
                    <h4>Cocktails</h4>
                </div>
                <div className={magic.items}>
                    {cocktails.map(elem => (
                        <div key={elem.idDrink} className={magic.cocktails}>
                            <Link to={`/coctails/${elem.idDrink}`}><img src={elem.strDrinkThumb} alt={elem.strDrink} /></Link>
                            <div className={magic.button}>
                                <div>
                                    <p>{elem.strDrink}</p>
                                    <img src={like} alt='like'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CocktailsList;