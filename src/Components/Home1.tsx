/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { createContext, useContext, useState } from 'react';
import Nav from './Nav';
import { shoppingcart } from './data';
import { Model } from '../Models/Model';
import Cart from './Cart';
import { UserContext } from '../App';

// export const UserContext = createContext([] as Array<any>);

const Home = () => {
  // const [selectedData, setSelectedData] = useState([] as Array<any>);
  const Data = useContext(UserContext);
  const selectedItems = Data[0];  
  const setSelectedData = Data[1];   

  const [Status, setStatus] = useState([false]);




  const addtocart = (item: Model) => {
    setSelectedData([...selectedItems, item]);
    setStatus([true]);
  }


  function removeitem(item: { photo: string | undefined; id: number; name: string; price: number; model: string; discount: number; count: number; }): void {
    // console.log(item);
    // const newitem = selectedItems.filter((i: { id: number; }) => i.id !== item.id);
    // setSelectedData(newitem);
    // setStatus([true]);
  }

  return (
    <div className=" mt-3 mb-3 container" id='har'>
      <Nav></Nav>
      <h1 className="text-center">Shopping cart</h1>

      <hr />
      <div className="row d-flex ">
        <div className="col d-flex" id='form'>
          {
            shoppingcart.map((item: {
              photo: string | undefined;id:number; name: string; price: number; model: string; discount: number; count: number
            }) =>
              <div className="card-body ">
                <img src={item.photo} alt="image" className="img-fluid" />  
                <div key={item.name}>id = {item.id}</div>
                  <div>name = {item.name}</div>
                <div>price= {item.price}</div>
                <div>model = {item.model}</div>
                <div>discount = {item.discount}</div>
                {Status && <button type="button" className="btn btn-success" onClick={() => addtocart(item)}>ADD TO CARD</button>}
                {!Status && <button type="button" className="btn btn-success" onClick={() => removeitem(item)}>Remove Item</button>}

              </div>
            )
          }

        </div>
      </div>
{/* 
      <UserContext.Provider value={[selectedData, setSelectedData]}>
        <Cart />
      </UserContext.Provider> */}

    </div>
  );
}

export default Home;



