export class Model{
     id: number;
    name: string;
    price: number;
    model: string; 
    discount: number;
    count:number;


    constructor( id: number ,name: string, price: number, model: string, discount: number,count:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.model = model;
        this.discount = discount;
        this.count = count;
    }
};