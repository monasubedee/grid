import { Avatar, Grid } from '@mui/material';
import React from 'react';


const Friend = ({avatar,name}) => {
    return(
       <Grid container mt={2} spacing={2} alignItems="center">
           <Grid item>
           <Avatar>
            {avatar}
          </Avatar>
           </Grid>
           <Grid item  >
             {name}
           </Grid>
       </Grid>
    )
}

export default Friend;