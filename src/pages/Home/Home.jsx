
import { Container,Grid } from '@mui/material';
import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import Navbar from '../../components/Navbar/Navbar';
import NewFeeds from '../../components/NewFeeds/NewFeeds';
import RightSide from '../../components/RightSide/RightSide';
import './Home.css';



const Home = () => {
    return(
        <>
      <Container maxWidth="fluid">
      <Navbar />
      <div style={{marginTop:"75px"}}>
      <Grid container spacing={5}>
        <Grid item md={3} sx={{display:{xs:'none',md:'block'}}}>
          <LeftSide />
        </Grid>
        <Grid item md={6}>
            <NewFeeds />
        </Grid>
        <Grid item md={3} sx={{display:{xs:'none',md:'block'}}}>
            <RightSide />
        </Grid>
      </Grid>
      </div>
     
      </Container>
       
        </>
    )
}

export default Home;