//Button contains function which is called when a button is clicked to rerender react dom .
import Button from '@mui/material/Button';
const Buttons=({val,name,fn,prod_id})=>{
    function fun1(){
        fn(val,prod_id);
    }
    if(val==='+')return(
        <div><Button variant="contained" style={{ background: '#000000' }} onClick={fun1} id={prod_id}>{name}</Button></div>
    )
    else return(
        <div><Button variant="contained" style={{ background: '#000000' }}onClick={fun1} id={prod_id}>{name}</Button></div>
    )
}
export default Buttons;