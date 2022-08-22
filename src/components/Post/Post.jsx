import { Favorite, FavoriteOutlined, Share, ThumbUp } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import { g } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';


const Post = ({image,title}) => {
    return(
       <Card>
           <CardHeader
           title="Mona Subedi" 
           subheader="5 minutes ago"
           avatar={<Avatar>M</Avatar>} />
          
           <CardContent>
               <Typography variant="h6" color="text.primary">
                   {title}
               </Typography>
           </CardContent>
           <Divider dark />
           <CardMedia  component="img" height="80%"  image={image} alt="image" />
           <CardActions>
               <IconButton>
                  <ThumbUp color='primary' />
               </IconButton>
               <IconButton>
                  <Favorite color='error' />
               </IconButton>
               <Typography component='div' variant="body2">
                   100 people like it
               </Typography>
               <Box sx={{flexGrow:1}} />
               <Typography component='div' variant="body2">
                   9 comments
               </Typography>
           </CardActions>
           
       </Card>
    )
}


export default Post;