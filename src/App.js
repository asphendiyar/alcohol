import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'
import Categories from './pages/Categories'
import Ingredients from './pages/Ingredients'
import Cocktails from './pages/Cocktails'
import Glasses from './pages/Glasses'
import CocktailsList from './pages/CocktailsList'
import Info from './pages/Info'
import Search from './pages/Search'
import WishList from './pages/WishList'
import React from 'react'
import useLocalStorage from './localStorage/useLocalStorage'


import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  const [cart, setCart] = React.useState([]);
    React.useEffect (() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then(res => res.json())
        .then(data => 
            setCart(data.drinks))
    }, [])

    const [wish, setWish] = useLocalStorage("wish",[])
    

  const onAdd = (elem) => {
    cart.map(x => setWish([...wish, x]));
  }

  let count = wish.length;
  return (
    <div className="App">
      <BrowserRouter>
        <Header  count={count}/>
        <Switch>
          <Route path='/' exact> <Main /> </Route>
          <Route path='/categories' exact> <Categories /> </Route>
          <Route path='/cocktails'><Cocktails/></Route>
          <Route path='/glasses'><Glasses/></Route>
          <Route path='/ingredients'><Ingredients/></Route>
          <Route path='/cocktailslist/:id'><Info onAdd={onAdd}/></Route>
          <Route path='/cocktailslist'><CocktailsList onAdd={onAdd} cart={wish}/></Route>
          <Route path='/search'><Search onAdd={onAdd}/></Route>
          <Route path='/wishlist'><WishList onAdd={onAdd} cart={wish}/></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
