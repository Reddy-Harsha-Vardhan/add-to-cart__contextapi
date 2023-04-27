/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import "./card.css";

export const Cards: React.FC<{
    name: string;
    price: number;
    model: string;
    discount: number;
}> = (props) => {

    return (
        <div className="card d-flex m-auto"></div>
    );
};