import React from 'react'
import magic from './OneForAll.module.css'
import { Link } from 'react-router-dom'

const Glasses = () => {
    const [glasses, setGlasses] = React.useState([])

    React.useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
        .then(res => res.json())
        .then(data =>  setGlasses(data.drinks))}, [])

    return  (
        <div className={magic.container}>
            <div className={magic.title}>
                <h4>Glasses</h4>
            </div>
            <div className={magic.items}>
                {glasses.map(elem => <Link to='/'>{ elem.strGlass}</Link>)}
            </div>
        </div>
    )
}

export default Glasses;