import React from 'react'
import magic from './WishList.module.css'
import { Link } from 'react-router-dom'
const WishList = (props) => {
    const {cart, onAdd} = props;
    



    return  (
        <div className={magic.container}>
            <div className={magic.title}>
                <h4 onClick={onAdd}>WishList</h4>
            </div>
            <div className={magic.items}>
                        {cart.map(elem => (
                            <div key={elem.idDrink} className={magic.cocktails}>
                                <Link to={`/cocktailslist/${elem.idDrink}`}><img src={elem.strDrinkThumb} alt={elem.strDrink} /></Link>
                                <div className={magic.button}>
                                    <div>
                                        <p>{elem.strDrink}</p>
                                    </div>
                                </div>
                            </div>
                        ))} 
                </div>
        </div>
    )
}

export default WishList;