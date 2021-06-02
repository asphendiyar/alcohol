import React from 'react'
import magic from  './Footer.module.css'
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Instagram.png'
import twitter from '../../assets/Twitter.png'
import vk from '../../assets/VK.png'
import whatsapp from '../../assets/Whatsapp.png'
import youtube from '../../assets/You tube.png'
import maestro from '../../assets/Maestro.png'
import paypal from '../../assets/PayPal.png'
import visa from '../../assets/Visa.png'
import mastercard from '../../assets/MasterCard.png'


import logotype from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const links = [
    {label: 'Catergories', to: '/categories', id: 1},
    {label: 'Types', to: '/types', id: 2 },
    {label: 'Search', to: '/search', id: 3},
    {label: 'Blog', to: '/blog', id: 4 },
    {label: 'About Us', to: '/about', id: 5},
    {label: 'Contacts', to: '/contacts', id: 6}
  ]
  

const Footer = () => {
    return (
        <div className={magic.footer}>
            <div className={magic.container}>
                <div className={magic.top}>
                    <Link to='/'  as={ Link }><img src={logotype} alt="LOGO" /></Link>
                    <div className={magic.links}>
                        {links.map(elem => (
                            <Link key={elem.id} as={Link} to={elem.to}>{elem.label}</Link>
                        ))}
                    </div>
                </div>

                <hr className={magic.line}/>
                
                <div className={magic.bottom}>
                    <div className={magic.socialMedia}>
                        <p>Social networks</p>
                        <img src={whatsapp} alt="" />
                        <img src={vk} alt="" />
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <div className={magic.creditCards}>
                        <img src={maestro} alt="" />
                        <img src={mastercard} alt="" />
                        <img src={paypal} alt="" />
                        <img src={visa} alt="" />
                    </div>
                </div>
            </div>


            
        </div> 
    )
}

export default Footer;