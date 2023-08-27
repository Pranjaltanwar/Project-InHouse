//it contains the attribute of the products required in the site. data is fetched and stored in ths product form.
class Product{
    constructor(id, name,price , url,gender){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.gender=gender;
        this.quantity=0;
    }
};
export default Product;