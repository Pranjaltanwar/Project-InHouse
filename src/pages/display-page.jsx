//it is the main page called by app.js it make various calls and return the entire page to app.js
import Grid from '@mui/material/Grid';
import Message from "../components/message";
import Card2 from '../components/card2';
import ProductOperations from "../services/product-operations";
import { useState } from 'react';
import {  Left } from '../components/header';
import Head from '../components/head';
import GooglePayButton from '@google-pay/button-react';

const Products=await ProductOperations.loadproduct();

function DisplayFunction(){
    
const[count,setCount]=useState(0);
const Update=(val,prod_id)=>{
       const prod = Products.find(currentProduct=>currentProduct.id===prod_id);
       if(val==='+')prod.quantity++;
       else prod.quantity--;
       setCount(count+1);
}
    var total=0.0;
    return (
    <>  
        <Grid container spacing={1} margin={2}>
        <Grid item xs={2}>
        <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/47783f580000640005020e95/0x0.png" height="100px" className="src" />
        </Grid>
        <Grid container xs={8} >
        <Message classname="Puma"/>
        </Grid>
        </Grid>
        <Grid container spacing={1} margin={2} >
            <Grid container item xs={9}>
            <Grid container item xs={12}>
            <Head classname="Products"/>
            </Grid>
            <Left fn={Update}/>
            </Grid>
            <Grid item xs={2}>
            <Head classname="Basket"/> 
            <dir></dir>
                <Grid container rowSpacing={1} sx={{background:'alice-blue'}}>
                    {Products.map(prod => {
                    total=total+parseFloat(prod.price)*prod.quantity;
                    if(prod.quantity)return (<Card2 id={prod.id} name={prod.name} quantity={prod.quantity} price={prod.price} url={prod.url} fn={Update}/>)})}
                </Grid>
                <Message classname="Total : " val={total} heading={5}/>
                <Message classname="Payable Amount : " val={total*1.18} heading={5}/>
                <GooglePayButton
  environment="TEST"
  buttonSizeMode="fill"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
            </Grid>
        </Grid>
    
                    
    </>
    );
} 
export default DisplayFunction;