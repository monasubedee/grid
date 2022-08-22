import React from 'react';
import { Avatar, Card, CardHeader, Divider, Grid, Box } from '@mui/material';
import './Header.css';
import IconText from '../IconText/IconText';
import { Label, Mood, PermMedia, Room } from '@mui/icons-material';
import CommonButton from '../CommonButton/CommonButton';

const Header = () => {
    return(
        <div>
             <Card>
           <Grid container alignItems="center">
               <Grid item>
               <CardHeader avatar={<Avatar>M</Avatar>} />
               </Grid>
               <Grid>
                <input className='inputText' type="text" placeholder="What's in your mind?" />
               </Grid>
           </Grid>
           <div style={{marginLeft:"20px"}}>
           <Divider dark />
           </div>
         
           <Grid spacing={2} alignItems='center' container ml={2} mb={3}>
              <Grid item >
                  <IconText spacing={1} icon={<PermMedia color='warning' />} name="Photo or Video" />
              </Grid>
              <Grid item >
                  <IconText  spacing={1} icon={<Label color="primary" />} name="Tag" />
              </Grid>
              <Grid item >
                  <IconText  spacing={1} icon={<Room color='success' />} name="Location" />
              </Grid>
              <Grid  item  >
                  <IconText  spacing={1} icon={<Mood color='error' />} name="Feelings" />
              </Grid>
              <Box sx={{flexGrow:0.6}} />
              <Grid md={2} alignSelf='flex-end' item >
              <CommonButton color="success" variant="contained" title="Share" />
              </Grid>
             
            
           </Grid>
          
          
             
       </Card>

        </div>
      
    )
}

export default Header;