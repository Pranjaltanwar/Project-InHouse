//It import URL from Util and make the network call.
//if network call is successful it return the data 
//else throws a function
import URL from '../utils/constants.jsx';

async function Networkcall(){
    try{
    const response=await fetch(URL);
    const object=response.json();
    return object;
    }
    catch(err){
        throw(err);
    }
}
export default Networkcall;