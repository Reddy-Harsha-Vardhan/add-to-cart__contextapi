/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const Features = () => {

    return (
        <div>
            <Nav />
            <h1>Mobile Heros</h1>
            <NavLink className='btn main-color btn-lg text-white' to={'Home'} >Sign up</NavLink>
        </div>
    );



};

export default Features;
