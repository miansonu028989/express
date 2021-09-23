import appStyle from './App.module.css';
import Navbar from './components/Navigation/Navbar';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className={`${appStyle.App}`}>
        <Navbar/>
      </div>
    )
  }
}
