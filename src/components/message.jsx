//It is the section for displaying Header {PUMA} and headings like total and payable amount.
import { Typography} from "@mui/material"
const Message=({classname="Message",val,heading=1})=>{
    if(heading===1)return(<Typography variant="h1"  >{classname}</Typography>);
    else if(heading===2)return(<h2 align="centre" >{classname}{val}</h2>);
    else if(heading===5)return(<h5 align="centre">{classname}{val}</h5>);
}
export default Message;