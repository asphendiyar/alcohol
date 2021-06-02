import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact> <Main /> </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
