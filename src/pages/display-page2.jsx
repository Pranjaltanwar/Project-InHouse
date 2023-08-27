//it is the display section for PRODUCT section .It is called by tabpanels . 
//Comp1 function generate and return cards(products) as per the selected tab.
import Grid from '@mui/material/Grid';
import Card1 from "../components/card1";
import ProductOperations from "../services/product-operations";
const Products=await ProductOperations.loadproduct();

const Comp1=({gender,fn})=>{
    
    return(
        <Grid>
                    <Grid container rowSpacing={1} bgcolor='aliceblue'>
                    {Products.map(prod => {
                    if(gender==='Any'){return (<Card1 val="+" id={prod.id} name={prod.name} price={prod.price} url={prod.url} fn={fn}/>)}
                    else if (gender===prod.gender){return (<Card1 val="+" id={prod.id} name={prod.name} price={prod.price} url={prod.url} fn={fn}/>)}
                    })}
                    </Grid>
        </Grid>
    );
}
export default Comp1;