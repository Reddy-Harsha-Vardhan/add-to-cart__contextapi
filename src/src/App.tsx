/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home1';
import Search from './Components/Search1';
import Features from './Components/Features';
import Cart from './Components/Cart';
import { Flex } from './Components/flex';
import { createContext, useState } from 'react';
import {shoppingcart} from './Components/data';
export const UserContext = createContext({} as any);

const App = () => {

  const [Data, setData] = useState(shoppingcart);
  const [cart,setCart] = useState([]);

  return (
    <>
      <UserContext.Provider value={[Data, setData,cart,setCart]}>


        <Flex>
          <switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/Features">
              <Features />
            </Route>
            <Route exact path="/Cart">
              <Cart />
            </Route>
           
          </switch>
        </Flex>
      </UserContext.Provider>
    </>
  );
}

export default App;
