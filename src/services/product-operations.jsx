//it import data from api-client and convert it into the required form .
//return the product array containing all the products .
import Networkcall from "./api-client";
import Product from "../model/product";
const ProductOperations={
    
async loadproduct(){
    const data=await Networkcall();
    const products=data['products'];
    const productArray=products.map(prod=>{
        const curr_prod=new Product(prod.id, prod.name,prod.price, prod.image_url,prod.gender);
        return curr_prod;
    });
    return productArray;
}
}

export default ProductOperations;