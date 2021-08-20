import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorite from './components/Favorite';
import Home from './components/Home';
import Header from './components/Header';
class App extends React.Component {

  render() {
    return(
      <>
         <Router>
           <Header />
      <div>
        
        <Switch>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
         
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </>
    )
  }
}

export default App;
