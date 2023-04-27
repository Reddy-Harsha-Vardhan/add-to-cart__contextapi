import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items:[
    { name: 'Mi', price: 10000, model: 'note 10', discount: 40 ,count:0},
    { name: 'nokia', price: 6000, model: '201', discount: 50,count:0 },
    { name: 'vi', price: 18000, model: 'z3', discount: 30,count:0 },
    ],
numberOfItems:0,
total:0

};
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{ },
},

);



export default productSlice.reducer;
