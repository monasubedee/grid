import { AppBar, Badge, IconButton, Toolbar, Typography,Grid, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle, More, MoreVert, Notifications, Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import  './Navbar.css';


const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
   

    const handleMenuOpen = () => {
        setMenuOpen(prev => !prev);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu id={menuId} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )
    
    const mobileMenuId = 'primary-search-mobile-account-menu';
    const renderMobileMenu = (
        <Menu id={mobileMenuId} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{vertical:'top',horizontal:'right'}} >
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <Link to="auth">
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <AccountCircle style={{color:'#000'}} />
                    </Badge>
                </IconButton>
                <p style={{color:'#000'}}>Profile</p>
            </MenuItem>
            </Link>   
        </Menu>
    )
    return(
        <div>
            <Grid container display='flex'>
                <Grid item>
                <AppBar>
                <Toolbar>
                   {/* <IconButton sx={{mr:2}} size="large" edge="start" color="inherit">
                        <MenuIcon />
                   </IconButton> */}
                   <Typography sx={{mr:2}} variant="h6" component="div">
                     MNSocial
                   </Typography>
                 <Box sx={{width:'70%',ml:{xs:'-5px'},mr:{xs:'12px'}}}>
                 <div className='searchContainer'>      
                      <div  className='searchIcon'> 
                       <Search  color="primary" />
                      </div>
                       <div className='searchInputWrapper'>
                       <input className='searchInput' type="text" placeholder='Search Me' />
                       </div>              
                  </div>
                 </Box>    
                   <Box sx={{flexGrow:1}} />
                   <Box sx={{display:{xs:'none',md:'flex'}}}>
                   <IconButton size="large" color="inherit">
                       <Badge badgeContent={17} color="error">
                           <Notifications />
                       </Badge>
                   </IconButton>
                  
                  <Link to="auth">
                   <IconButton onClick={handleMenuOpen} size="large" color='inherit'>
                       <AccountCircle style={{color:'#fff'}} />
                   </IconButton>
                   </Link> 
                   </Box>
                   <Box className="moreIcon" sx={{display:{xs:'block',md:'none'},ml:{xs:'30px'}}}>
                       <IconButton onClick={handleMenuOpen} size="large" color="inherit">
                          <MoreVert />
                       </IconButton>
                   </Box>
               </Toolbar>
           </AppBar>
           {renderMenu}
           {renderMobileMenu}

            </Grid>
            </Grid>
          
        </div>
          
        
    )
}


export default Navbar;