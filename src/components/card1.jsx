// it is the part of the comp 1 where cards contains attributes of products and a add to cart button which contain function to rerender react DOM .  
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Buttons from './buttons';

const Card1=({id,name, price,url,fn})=>{
    return (
        <div style={{margin: '4%'}} >
    <Card sx={{ maxWidth: 250,minWidth:250 }}>
      <CardMedia
        component="img"
        height="150"
        image={url}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price:{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Buttons name={"Add To Cart"} prod_id={id} fn={fn} val="+"/>
      </CardActions>
    </Card>
    </div>
    );
}

export default Card1;