import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Categories from './containers/Categories'
import CategoryForm from './containers/CategoryForm'
import CategoryInfo from './containers/CategoryInfo'




class App extends Component {
  render() {
    return (
        <Router>
          <Navigation/>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/categories" component={Categories}/>
              <Route exact path="/category/new" component={CategoryForm}/>
              <Route path="/categories/:id" component={CategoryInfo}/>
             {/*<Route path="/heros/:id/ability/new" component={AbilityForm}/>*/}
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
