import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_live_51P7hCKAqPof6n7dPMGrBrCqB7qLLhoNHCQHocE43Us55yLFcRzy4962EeXh74N9zUdDzokIN4SU8010q4CntrcyD00SGhfgos1");

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      // Clean up the subscription to avoid memory leaks
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
