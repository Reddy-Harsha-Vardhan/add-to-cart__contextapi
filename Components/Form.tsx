/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from './Nav';

import {Model} from '../Models/Model';
import { MouseEvent, SetStateAction, useState } from 'react';
import './Form.css';
import { useContext } from 'react';
import { UserContext } from '../App';





const  MyForm=()=>{

    const Data = useContext(UserContext);
    const data = Data[0];  
    const setData = Data[1];   
    const cart=Data[2];
    const setCart=Data[3];
    const [show,setShow]=useState<boolean>(false);
   
    const [form ,setform]=useState();
    const[id,setID]=useState<number>();
    const[photo,setPhoto]=useState<string>();
    const[name,setName]=useState<string>();
    const[price,setPrice]=useState<number>();
    const[model,setModel]=useState<string>();
    const[discount,setDiscount]=useState<number>();
    const[count,setCount]=useState<number>();


    const editform=(item:any)=>{
      setID(item.id);
      setName(item.name);
      setPrice(item.price);
      setModel(item.model);
      setDiscount(item.discount);
      setCount(item.count);
      
     
    }

  const addData=(e:any )=>{
    e.preventDefault();
     console.log(id,name,price,model,discount,count);
     setData([...data,{id,name,price,model,discount,count}]);
     
     
     console.log(data);
  }
  const styles = {
    color: 'black',
    padding: '10px',
    fontFamily: 'Arial',
    borderRadius: '5px',
  };
 
  return (
    <>
    <Nav/>
    <button type='submit' onClick={()=>{setShow(!show)}}> New Form </button>
    {show &&
      <form className='Form'style={styles} >
       
      <label>Id:</label>
      <input className=" m-2 block px-2" value={id} type="text" onChange={(e)=>{setID(parseInt(e.target.value, 10))}} />
      <br></br>

      <label>Name:</label>
      <input className=" m-2 block px-2" value={name} type="text" onChange={(e)=>{setName(e.target.value)}} />
      <br></br>

      <label>Price:</label>
      <input className=" m-2 block px-2" value={price} type="text" onChange={(e)=>{setPrice(parseInt(e.target.value, 10))}} />
      <br></br>

      <label>Model:</label>
      <input className=" m-2 block px-2"  value={model} type="text" onChange={(e)=>{setModel(e.target.value)}} />
      <br></br>
      
      <label>Discount:</label>
      <input className=" m-2 block px-2" value={discount} type="text" onChange={(e)=>{setDiscount(parseInt(e.target.value, 10))}} />
      <br></br>

      <label>Count:</label>
      <input className=" m-2 block px-2" value={count} type="text" onChange={(e)=>{setCount(parseInt(e.target.value, 10))}} />
      <br></br>
       {/* <input value=""></input> */}
      <button className=" m-2 block px-2" type="submit" onClick={(e)=>{addData(e)}}>Submit</button>
    </form>}
 
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Model</th>
            <th>Discount</th>
            {/* <th>Count</th> */}
          </tr>
        </thead>
        <tbody>
          {
          data.map((item:Model) => (
          
            <tr key={item.id}>
              <td contentEditable="true" onKeyUp={(e)=>{console.log(e.target)}}>{item.id}</td>
              {/* <td><img src={item.photo} alt="Image not found" width="100" height="100"/></td> */}
              <td onKeyUp={(e)=>{console.log(e.target)}}>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.model}</td>
              <td>{item.discount}</td>
              {/* <td>{item.count}</td> */}
              <td><button  onClick={(item)=>{editform(item)}}>Edit</button></td>
     
            </tr>
    
          ))}
        </tbody>
      </table>




    </>
  );
}

export default MyForm;