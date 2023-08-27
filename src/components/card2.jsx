//It is the part of the Bucket and contain two buttons + and - for increasing and decreasing the quantity of a certain product . 
//Each button contains a function to rerender react DOM if quantity drops to zero product will not be shown in Bucket 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Buttons from './buttons';


const Card2=({id,name,quantity,price,url,fn})=>{
    return (
    <div style={{margin: '4%'}} >
    <Card sx={{ maxWidth: 220 ,minWidth:150}}>
      <CardMedia
        component="img"
        height="170"
        image={url}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        Quantity : {quantity}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        Price : {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Buttons name={'+'} prod_id={id} fn={fn} val="+"/>
        <Buttons name={'-'} prod_id={id} fn={fn} val="-"/>
      </CardActions>
    </Card>
    </div>
    );
}
export default Card2;