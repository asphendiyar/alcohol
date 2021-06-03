import React from 'react'
import magic from './OneForAll.module.css'
import { Link } from 'react-router-dom'

const Ingredients = () => {
    const [ingredients, setIngredients] = React.useState([])

    React.useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then(res => res.json())
        .then(data =>  setIngredients(data.drinks))}, [])

    return  (
        <div className={magic.container}>
            <div className={magic.title}>
                <h4>Ingredients</h4>
            </div>
            <div className={magic.items}>
                {ingredients.map(elem => <Link to='/'>{ elem.strIngredient1 }</Link>)}
            </div>
        </div>
    )
}

export default Ingredients;