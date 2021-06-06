import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'
import Categories from './pages/Categories'
import Ingredients from './pages/Ingredients'
import Cocktails from './pages/Cocktails'
import Glasses from './pages/Glasses'
import CocktailsList from './pages/CocktailsList'
import Info from './pages/Info'


import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact> <Main /> </Route>
          <Route path='/categories' exact> <Categories /> </Route>
          <Route path='/cocktails'><Cocktails/></Route>
          <Route path='/glasses'><Glasses/></Route>
          <Route path='/ingredients'><Ingredients/></Route>
          <Route path='/cocktailslist/:id'><Info/></Route>
          <Route path='/cocktailslist'><CocktailsList/></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
