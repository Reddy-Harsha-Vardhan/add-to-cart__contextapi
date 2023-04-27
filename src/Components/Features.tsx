/* eslint-disable @typescript-eslint/no-unused-vars */
import  React from  'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

    const  Features = () => {

    return (
        <div>
            <Nav/>
            <h1>Mobile Heros</h1>
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                          <NavLink className='btn main-color btn-lg text-white' to={'Home'} >Sign up</NavLink>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most accurate book selection possible
                                for our Luv 2 Read students! We are diligent about our book selection
                                and our books are always going to be our
                                top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>*
        </div>
    );
};

export default Features;
