/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import Nav from './Nav';
import { UserContext } from '../App';
// import {connect} from 'react-redux';

export const Cart= () => {

  const Data = useContext(UserContext);
  const data = Data[0];  
  const setData = Data[1];   
  const cart=Data[2];
  const setCart=Data[3];

    const remove = (item: { id:number; name: string; price: number; model: string; discount: number; count: number,}) => {
        let index=0;
        for(index=0;index<cart.length;index++)
        {
           if(cart[index].id===item.id)
             break;
        }
       cart.splice(index, 1);
       setCart([...cart]);
    // console.log(item)  
    // console.log(data)
    let data_index = 0;
    for(data_index=0;data_index<data.length;data_index++)
    {
       if(data[data_index].id===item.id)
         break;
    }
    item={...item,count:0};
    data.splice(data_index, 1,item);
    setData(data);
   
    }

    return (
        <div className='mt-2'>   
            <Nav></Nav>
            <h1 className='m-3'>Selected Items</h1>
            <hr/>
            <div>
                {
                    cart.map((item: { id:number; name: string; price: number; model: string; discount: number; count: number, }) => {
                        return (
                            <div className="card m-4">
                                <div className="card-body ">
                                    <img src={'https://www.91-img.com/pictures/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg'} alt="image" className="img-fluid" />
                                    <div key={item.name}>name = {item.name}</div>
                                    <div>price= {item.price}</div>
                                    <div>model = {item.model}</div>
                                    <div>discount = {item.discount}</div>

                                    <div>  
                                    <button type="button" className="btn btn-success" onClick={() => remove(item)}>Remove </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default (Cart);