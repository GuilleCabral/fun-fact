import React, { Component } from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Fact1 from './components/Fact1'
import Fact2 from './components/Fact2'
import Fact3 from './components/Fact3'
import Fact4 from './components/Fact4'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/fact1' component={Fact1}/>
        <Route path='/fact2' component={Fact2}/>
        <Route path='/fact3' component={Fact3}/>
        <Route path='/fact4' component={Fact4}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;