import { Typography,Grid, Paper, Button } from '@mui/material';
import './Auth.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    let navigate = useNavigate();
    return(
        <div className='auth'>
            <div className="authContainer">
            <Grid container  spacing={2}  justifyContent='center' alignItems='center'> 
            <Grid item md={5} mt={-4} sm={12} xs={12}>
                    <Typography variant="h4" color="primary" component="p">
                        MNSocial
                    </Typography>
                    <Typography component="p" mt={3}>
                        Connect with friends and the world around you on MNsocial.
                    </Typography>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
                <div className='formContainer'>
                    <Grid container flexDirection='column'>
                        <Grid item md={12} mt={1}>
                        <input className='input' type="text" placeholder="Enter Email" />
                        </Grid>
                        <Grid item md={12} mt={2}>
                        <input className='input' type="password" placeholder='Enter Password' /> 
                        </Grid>
                        <Grid item md={12} mr={2} mt={5} pl={3}>
                            <Button onClick={() => navigate('/')} fullWidth variant="contained">Log In</Button>
                        </Grid>
                        <Grid item md={12} mt={2} alignSelf='center' >
                            <Typography color="primary" fontSize={13} component="p">
                                Forgot password?
                            </Typography>
                        </Grid>
                        <Grid item mt={2} alignSelf='center' mb={3}>
                            <Button color="success" variant="contained">
                                Create a New Account
                            </Button>
                        </Grid>
                    </Grid>  
                </div>    
            </Grid>   
            </Grid>
            </div>
        </div>
       
      
    )
}


export default Auth;