export class Model{
     id: number;
    name: string;
    price: number;
    model: string; 
    discount: number;



    constructor( id: number ,name: string, price: number, model: string, discount: number,){
        this.id = id;
        this.name = name;
        this.price = price;
        this.model = model;
        this.discount = discount;
    }
};