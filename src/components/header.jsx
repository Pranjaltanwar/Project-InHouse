//It is the product listing section of the PRODUCT  section it includes tabs and form tab panels for the tabs with respect to index
//for tab at index 0 its all section ................ the it call comp1 from display-page2 
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Comp1 from '../pages/display-page2';
import { Grid } from '@mui/material';

export const Left = ({fn})=> {
  return (
   <Grid > 
  <Tabs aria-label="Basic tabs" defaultValue={0}>
  <TabList>
    <Tab>ALL</Tab>
    <Tab>Men</Tab>
    <Tab>Women</Tab>
  </TabList>
  <TabPanel value={0}>
  <Comp1 gender={'Any'} fn={fn}/>
  </TabPanel>
  <TabPanel value={1}>
  <Comp1 gender={'men'} fn={fn}/>
  </TabPanel>
  <TabPanel value={2}>
  <Comp1 gender={'women'} fn={fn}/>
  </TabPanel>
</Tabs>
</Grid>
  );
}