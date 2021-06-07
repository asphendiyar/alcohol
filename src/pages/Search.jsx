
import React from 'react'
import like from '../assets/like.png'
import { Link } from 'react-router-dom'
import magic from './Search.module.css'

const Search = () => {
    
    const [list, setList] = React.useState([])
    const [search, setSearch] = React.useState('')
    
    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => { setList(data.drinks) }
        )
    },[search])

    const searching = (e) => { 
        setSearch(e.target.value);
    } 

    return (
    
            <div className={magic.container}>
                <div className={magic.title}>
                    <h4>Search</h4>
                </div>
                <form>
                    <input onChange={searching} type='text' id='input' placeholder='COCKTAIL NAME'></input> 
                    <button >search</button>
                </form>
                <div className={magic.items}>
                        {list.map(elem => (
                            <div key={elem.idDrink} className={magic.cocktails}>
                                <Link to={`/cocktailslist/${elem.idDrink}`}><img src={elem.strDrinkThumb} alt={elem.strDrink} /></Link>
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
    )
}

export default Search;