/* eslint-disable no-unused-vars */
import appStyle from './App.module.css';
import Navbar from './components/Navigation/Navbar';
import React, { Component } from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom'
import AboutMe from './components/About/AboutMe';
import ContectMe from './components/contects/Contects';
import ItemsDetail from './components/ItemDetail/Itemdetail';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className={`${appStyle.App}`}>
          <Navbar/>
          <Route path='/about' exact component={AboutMe}/>
          <Route path='/Contects' component={ContectMe}/>
          <Route path='/about/:id' component={ItemsDetail}/>
        </div>
      </Router>
    )
  }
}
