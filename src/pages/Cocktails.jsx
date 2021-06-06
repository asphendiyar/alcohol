import React from 'react'
import magic from './OneForAll.module.css'
import { Link } from 'react-router-dom'

const Cocktails = () => {
    const [categories, setCategories] = React.useState([])

    React.useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.json())
        .then(data =>  setCategories(data.drinks))}, [])

    return  (
        <div className={magic.container}>
            <div className={magic.title}>
                <h4>Categories</h4>
            </div>
            <div className={magic.items}>
                {categories.map(elem => <Link to='/'>{ elem.strCategory }</Link>)}
            </div>
        </div>
    )
}

export default Cocktails;