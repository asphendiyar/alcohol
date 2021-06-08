import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import magic from './Info.module.css'
import { Link, useParams } from 'react-router-dom'
import deu from '../assets/deutchland.png'
import eng from '../assets/england.png'
import ita from '../assets/italy.png'
import checkmark from '../assets/checkmark.png'

const Info = (props) => {
    const {onAdd} = props
    const { id } = useParams();
    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => 
            setInfo(data.drinks[0]))
    }, [])
    const [info, setInfo] = useState({});
    const [lang, setLang] = useState(info.strInstructionsDE);
    
    console.log(typeof(Object.keys(info).filter(elem => elem.includes('strIngredient')).map(x => info[x])));

    const toDeu = () => {
        setLang(info.strInstructionsDE)
    }
    const toEng = () => {
        setLang(info.strInstructions)
    }
    const toIta = () => {
        setLang(info.strInstructionsIT)
    }
    
    return  (
        <div className={magic.container}>
            <div className={magic.title}>
                <h4>{info.strDrink}</h4>
            </div>
            <div className={magic.ingredientsPart}>
                    <h5>Ingredients</h5>
                    <div className={magic.ingredients}>
                        {Object.keys(info).filter(elem => elem.includes('strIngredient')).map(x => info[x]).filter(Boolean).map(z=> <Link>{z}</Link>)} 
                    </div>
            </div>
            <div className={magic.info}>
                <div className={magic.details}>
                        <h5>Details</h5>
                        <ul>
                            <li>
                                <img src={checkmark} alt='checkmark'/> 
                                <p>Category: {info.strCategory}</p>
                            </li>
                            <li>
                                <img src={checkmark} alt='checkmark'/> 
                                <p>IBA: {info.strIBA}</p>
                            </li>
                            <li>
                                <img src={checkmark} alt='checkmark'/> 
                                <p>Alcoholic: {info.strAlcoholic}</p>
                            </li>
                            <li>
                                <img src={checkmark} alt='checkmark'/> 
                                <p>Glass: {info.strGlass}</p>
                            </li>
                        </ul>
                </div>
            
                <div className={magic.cocktailsImg}>
                   <img src={info.strDrinkThumb} alt='somethingCool'/>
                </div>

                <div className={magic.instructions}>
                        <h5>Instructions</h5> 
                        <div className={magic.language}>
                            <img onClick={toDeu} src={deu} alt="german" />
                            <img onClick={toEng} src={eng} alt="english" />
                            <img onClick={toIta} src={ita} alt="italian" />
                        </div>
                        <div className={magic.instruction}>
                            <p>{lang}</p> {/*Here you need to click to see instruction*/}
                        </div>
                </div>
            </div>
            <button onClick={onAdd} className={magic.wishListBtn}>ADD TO WISHLIST</button>
        </div>
    )
}

export default Info;
