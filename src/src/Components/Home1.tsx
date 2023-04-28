/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { createContext, useContext, useState } from 'react';
import Nav from './Nav';
import { Model } from '../Models/Model';
import Cart from './Cart';
import { UserContext } from '../App';

// export const UserContext = createContext([] as Array<any>);

const Home = () => {
  // const [selectedData, setSelectedData] = useState([] as Array<any>);
  const Data = useContext(UserContext);
  const data = Data[0];  
  const setData = Data[1];   
  const cart=Data[2];
  const setCart=Data[3];





  const addtocart = (item: Model) => {
    setCart([...cart, item]);
    let data_index = 0;
    for(data_index=0;data_index<data.length;data_index++)
    {
       if(data[data_index].id===item.id)
         break;
    }
    item={...item,count:1};
    data.splice(data_index, 1,item);
    setData(data);
  }


  // function removeitem(item: { photo: string | undefined; id: number; name: string; price: number; model: string; discount: number; count: number; }): void {
  //    let index=0;
  //    for(index=0;index<cart.length;index++)
  //    {
  //       if(cart[index].id===item.id)
  //         break;
  //    }
  //   cart.splice(index, 1);
  //   setCart([...cart]);
    
  //   let data_index = 0;
  //   for(data_index=0;data_index<data.length;data_index++)
  //   {
  //      if(data[data_index].id===item.id)
  //        break;
  //   }
  //   item={...item,count:0};
  //   data.splice(data_index, 1,item);
  //   setData(data);
  // }

  return (
    <div className=" mt-3 mb-3 container" id='har'>
      <Nav></Nav>
      <h1 className="text-center">Shopping cart</h1>

      <hr />
      <div className="row d-flex ">
        <div className="col d-flex" id='form'>
          {
            data.map((item: {
              photo: string | undefined;id:number; name: string; price: number; model: string; discount: number; count: number
            }) =>
               <div className="card-body ">
                <img src={item.photo} alt="image" className="img-fluid" />  
                <div key={item.name}>id = {item.id}</div>
                  <div>name = {item.name}</div>
                <div>price= {item.price}</div>
                <div>model = {item.model}</div>

                <div>discount = {item.discount}</div>
                {item.count===0 && <button type="button" className="btn btn-success" onClick={() => addtocart(item)}>ADD TO CARD</button>}
                {item.count===1 && <button type="button" className="btn btn-success" >already added</button>}

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



