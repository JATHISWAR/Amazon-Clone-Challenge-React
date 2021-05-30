import './App.css';
import React,{useEffect} from 'react';
import  Header from'./components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import {auth} from './Firebase';
import Orders from './components/Orders';
import {loadStripe} from "@stripe/stripe-js";
import {useStateValue} from './StateProvider';
import { Elements } from "@stripe/react-stripe-js";
import Payment from './components/Payment';
const promise = loadStripe("pk_test_51IwfYWSF99fwHzvha9QwmNtgsI76LqnhQZlKOxRkXwQ5wMzVAeT8YvywwZiP2GATEY2SdkXbvOQUr9jFywlrWTE000DxC2Ppy8");

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('User is',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [])
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
