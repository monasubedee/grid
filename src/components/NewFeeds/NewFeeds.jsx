import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';


const NewFeeds = () => {
    return(
     <div style={{height:'100vh',overflowY:'scroll'}}>
        <Header />
        <div style={{marginTop:'20px'}}>
        <Grid container>
            <Grid item sm={12} xs={12} >
            <Post title="#ConvoRehearsal" image="images/image.jpeg" />
            </Grid>
            <Grid mt={2} item sm={12} xs={12}>
            <Post  title="#Bigdayofmylife" image="images/image2.jpeg" />
            </Grid>
            {/* <Grid mt={2} item sm={12} xs={12}>
            <Post  title="#Convocation" image="images/image3.jpeg" />
            </Grid> */}
            <Grid  mt={2} item sm={12} xs={12}>
            <Post  title="#throwback" image="images/image4.jpeg" />
            </Grid>

        </Grid>

        </div>
       
     </div>
    )
}


export default NewFeeds;