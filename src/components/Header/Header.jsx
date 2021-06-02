import React from 'react'
import wishlist from '../../assets/wishlist 1.svg'
import magic from './Header.module.css'
import logotype from '../../assets/logo.png'
import  { Link } from 'react-router-dom'


const links = [
    {label: 'Catergories', to: '/categories', id: 1},
    {label: 'Types', to: '/types', id: 2},
    {label: 'Search', to: '/search', id: 3},
    {label: 'About Us', to: '/about', id: 4},
    {label: 'Contacts', to: '/contacts', id: 5}
  ]

const Header = () => {
  return (
    <div>
        <div className={magic.header}>
            <div className={magic.container}>
                <div className={magic.top}>
                    <span> Order online or call us (1800) 000 8808 </span>
                    <span>
                        <img src={wishlist} alt="wishlist" />
                        WISHLIST
                    </span>
                </div> 
            </div>

            <hr className={magic.headline}/>

            <div className={magic.container}>
                <div className={magic.bottom}>
                <Link to='/'  as={ Link }><img src={logotype} alt="LOGO" /></Link>

                    <div className={magic.links}>
                        {links.map(elem => (
                            <Link key={elem.id} as={Link} to={elem.to}>{elem.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Header;