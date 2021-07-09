import React from 'react';
import Giphy from './components/Giphy/Giphy';
import Reddit from './components/Reddit/Reddit';
import Header from './components/Header';
import './App.css';
// router
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact  >
          <Reddit />
        </Route>
        <Route path='/giphy'>
          <Giphy />
        </Route>
      </Switch>
    </div>
  )
}

export default App

// const check = ["", 'self', 'default', 'nsfg', 'spoiler'];