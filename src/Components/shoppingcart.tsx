// import React from "react";
import { Model } from "../Models/Model";
import { Cards } from "./Cards";
import "./shoppingcart.css";
// import { NavLink } from "react-router-dom";

export const Shoppingcart = (props: { item: Model[] }) => {
    return (
        <div>
            <div className="card d-flex m-auto">
                <div className="row ">
                    <div className="col  ">
                        {props.item.map(Card =>
                            <Cards
                                key={Card.name}
                                name={Card.name}
                                price={Card.price}
                                model={Card.model}
                                discount={Card.discount} />)}   
                    </div>
                </div>
            </div>
        </div>
    );
}