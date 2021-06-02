import React from 'react'
import checkmark from '../assets/checkmark.png'
import one from '../assets/categories/one.png'
import two from '../assets/categories/two.png'
import three from '../assets/categories/three.png'
import { Link } from 'react-router-dom'
import magic from './Categories.module.css'

function Categories() {
    return (
        <div className={magic.wrapper}>
            <div className={magic.firstOne}>
                <div className={magic.desk}>
                    <h3>Large selection of glasses</h3>
                    <ul>
                        <li><img src={checkmark} alt='checkmark'/> A glass is a visiting card of any cocktail.</li>
                        <li><img src={checkmark} alt='checkmark'/> A prerequisite for a good cocktail is its appearance.</li>
                        <li><img src={checkmark} alt='checkmark'/> A properly selected glass is 50% of success.</li>
                    </ul>
                    <div><Link to='/' className={magic.button}>Show</Link></div>
                </div>

                <div className={magic.deskImage}>
                    <img src={one} alt='glasses'/>
                </div>
            </div>
            <div className={magic.secondOne}>
                <div className={magic.deskImage}>
                    <img src={three} alt='wine'/>
                </div>
                <div className={magic.desk}>
                    <h3>Our database contains a wide variety <br/> of cocktail categories.</h3>
                    <ul>
                        <li><img src={checkmark} alt='checkmark'/> You will find any ingredients you like.</li>
                        <li><img src={checkmark} alt='checkmark'/> Cocktails of different categories for any evening.</li>
                        <li><img src={checkmark} alt='checkmark'/> For each ingredient, you are guaranteed to find several cocktails.</li>
                    </ul>
                    <div><Link to='/' className={magic.button}>Show</Link></div>
                </div>
            </div>
            <div className={magic.thirdOne}>
                <div className={magic.deskImage}> 
                    <img src={two} alt='ingrid'/>
                </div>
                <div className={magic.desk}>
                    <h3>Large database of various ingredients <br /> for your cocktails </h3>
                    <ul>
                        <li><img src={checkmark} alt='checkmark'/> You will find any ingredients you like.</li>
                        <li><img src={checkmark} alt='checkmark'/> Cocktails of different categories for any evening.</li>
                        <li><img src={checkmark} alt='checkmark'/> For each ingredient, you are guaranteed to find several cocktails.</li>
                    </ul>
                    <div><Link to='/' className={magic.button}>Show</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Categories;