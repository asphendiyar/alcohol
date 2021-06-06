import magic from './Main.module.css'
import { Link } from 'react-router-dom'
import whiskey from '../assets/ingredients/whiskey.png'
import beer from '../assets/ingredients/beer.png'
import gin from '../assets/ingredients/gin.png'
import tequila from '../assets/ingredients/tequila.png'
import wine from '../assets/ingredients/wine.png'
import rum from '../assets/ingredients/rum.png'
import bacardi from '../assets/brands/bacardi.png'
import branson from '../assets/brands/branson.png'
import genius from '../assets/brands/genius.png'
import jimBeam from '../assets/brands/jimbeam.png'
import milestone from '../assets/brands/milestone.png'
import miller from '../assets/brands/miller.png'
import group1 from '../assets/groupWCU/group1.png'
import group2 from '../assets/groupWCU/group2.png'
import group3 from '../assets/groupWCU/group3.png'
import React from 'react'
const ingredients = [
    {name: 'whiskey', src: whiskey, id: 1},
    {name: 'tequila', src: tequila, id: 2},
    {name: 'rum', src: rum, id: 3},
    {name: 'gin', src: gin, id: 4},
    {name: 'beer', src: beer, id: 5},
    {name: 'wine', src: wine, id: 6},
]



function Main() {
    const [subscribed, setSetbscribed] = React.useState(false);
    const subscribeSuccess = () => {
        setSetbscribed(true)
    }
    return (
        <div>
            <div className={magic.main}>
                <div className={magic.container}>
                    <div className={magic.intro}>
                        <p>Welcome to our store</p>
                        <h1>Shop Our Amazing Selection of <br /> Liquor, Beer, And Wine</h1>
                        <Link to='/cocktailslist' className={magic.mainShop}>Shop now</Link>
                    </div>
                </div>
            </div>
            <div className={magic.container}>
                <div className={magic.ingredients}>
                    {ingredients.map( elem => (
                        <div>
                            <img key={elem.id} src={elem.src} alt={elem.name} />
                            <h2> {elem.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className={magic.banner}>
                <h1 className={magic.discountText}>Get an Extra 10% off your first <br/>order</h1>
                <p className={magic.discountP}>With a large selection of popular spirits and hard to find rare liquors, <br/> we are your one stop shop for all your alcohol needs.</p>
                <Link to='/cocktailslist' className={magic.mainShop}>Shop now</Link>
            </div>
            <div className={magic.brands}>
                <h3>Popular Brands</h3>
                <div className={magic.container}>                    
                    <div className={magic.brandImages}>
                        <img src={bacardi} alt="bacardi" />
                        <img src={jimBeam} alt="jimBeam" />
                        <img src={milestone} alt="milestone" />
                        <img src={branson} alt="branson" />
                        <img src={miller} alt="miller" />
                        <img src={genius} alt="genius" />
                    </div>
                </div>
            </div>
            <div className={magic.wcu}>
                <div className={magic.container}>            
                    <div className={magic.wcuInner}>
                        <div className={magic.question}>
                            <h4>Why Choos Us</h4>
                        </div>
                        
                        <div className={magic.wcuVariants}>
                            <div>
                                <img src={group1} alt="stars" />
                                <span>Quality</span>
                                <p>All our beverages are supplied by proven manufacturers <br /> from all around the world. We guarantee the high-class <br /> quality.</p>
                            </div>
                            <div>
                                <img src={group2} alt="deadlines" />
                                <span>Domestic & Commercial</span>
                                <p>We ship all over USA as well as overseas. It takes 3-5 <br /> business days for package to be delivered right to your <br /> doors within US.</p>
                            </div>
                            <div>
                                <img src={group3} alt="creditCards" />
                                <span>Best Cost</span>
                                <p>Prices on our products are fair and affordable. You will be <br /> gladly surprised once you get your package delivered!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={magic.subscribe}>
                <h2>Get our latest news and special sales</h2>
                <h3>YOU MAY UNSUBSCRIBE AT ANY MOMENT. FOR THAT PURPOSE, PLEASE FIND OUR CONTACT INFO IN THE LEGAL NOTICE.</h3>
                {subscribed === true ? (<div className={magic.subscribed}>YOU HAVE SUCCESSFULLY SUBSCRIBED</div>):
                (<form>
                    <input type='email' placeholder='Email Adress'></input> 
                    <button onClick={subscribeSuccess}>SUBSCRIBE</button>
                </form>)
                    }

            </div>
        </div>
    )

}

export default Main;