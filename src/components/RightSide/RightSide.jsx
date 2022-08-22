
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { deepOrange, deepPurple, pink,yellow } from '@mui/material/colors';
import React from 'react';
import './RightSide.css';


const RightSide = () => {
    return(
      <div className='rightSideContainer'>    
          <Grid container columnSpacing={2} alignItems="center">
              <Grid item md={1}>
                 <img width="38px" height="100%" src='images/gift.png' alt='gift' />
              </Grid>
              <Grid item md={11}>
                <Typography ml={2} component="p" variant='body2'>
                    <b>
                        
                  Hsu Hlaing Hnin
                    </b> and <b>3 other friends</b> have a birthday today.
                </Typography>
              </Grid>
          </Grid>
          <Box mt={4}>
              <img width="100%" height="100%" style={{borderRadius:'10px'}} src='images/ad.png' alt='ad' />
          </Box>
          <Box mt={2}>
            <Typography fontSize="16px" component="p" fontWeight='500'>Online Friends</Typography>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Kumari Dahal</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>L</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Laxmi Pokhrel</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: yellow[500] }}>A</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Anita Poudel</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: pink[500] }}>N</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Nirmalar Parajuli</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item mr={2}>
                <Avatar>K</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Kamal Parajuli</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Kumari Dahal</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>L</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Laxmi Pokhrel</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: yellow[500] }}>A</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Anita Poudel</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item  mr={2}>
                <Avatar sx={{ bgcolor: pink[500] }}>N</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Nirmalar Parajuli</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center"  mt={2}>
                <Grid item mr={2}>
                <Avatar>K</Avatar>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Kamal Parajuli</Typography>
                </Grid>
            </Grid>
           
          </Box>
      </div>
    )
}


export default RightSide;