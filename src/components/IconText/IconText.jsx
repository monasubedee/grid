
import { Grid,Typography } from '@mui/material';
import React from 'react';


const IconText = ({icon,name,spacing,fontSize}) => {
    return(
        <Grid mt={2} container columnSpacing={spacing} alignItems="center">
        <Grid item>
         {icon}
        </Grid>
        <Grid item>
          <Typography variant='h6' sx={{fontSize:{xs:"15px", md:"17px"}}} fontSize={fontSize} component="p">
            {name}
          </Typography>
        </Grid>
    </Grid>
    )
}

export default IconText;