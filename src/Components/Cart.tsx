/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import Nav from './Nav';
import { UserContext } from '../App';
// import {connect} from 'react-redux';

export const Cart= () => {

    const Data = useContext(UserContext);
    const selectedItems = Data[0];  
    console.log(selectedItems);   

    const remove = (item: { name: string; price: number; model: string; discount: number; count: number,photo:undefined | string }) => {
        console.log(item);
        
    }

    return (
        <div className='mt-2'>   
            <Nav></Nav>
            <h1 className='m-3'>Selected Items</h1>
            <hr/>
            <div>
                {
                    selectedItems.map((item: { name: string; price: number; model: string; discount: number; count: number,photo:undefined | string }) => {
                        return (
                            <div className="card m-4">
                                <div className="card-body ">
                                    <img src={item.photo} alt="image" className="img-fluid" />
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