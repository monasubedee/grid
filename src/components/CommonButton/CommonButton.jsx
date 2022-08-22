import React from 'react';
import {Button} from '@mui/material';


const CommonButton = ({variant,title,color}) => {
    return(
        <Button color={color} variant={variant}>
            {title}
        </Button>
    )
}

export default CommonButton;