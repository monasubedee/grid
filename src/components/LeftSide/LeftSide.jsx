import React from 'react';
import { Bookmark,Work, Event, Feed, People, PlayCircle, QuestionMark, Wifi, School } from '@mui/icons-material';
import IconText from '../IconText/IconText';
import './LeftSide.css';
import CommonButton from '../CommonButton/CommonButton';
import { Divider } from '@mui/material';
import Friend from '../Friend/Friend';


const LeftSide = () => {
    return(
        <div className="leftSideContainer" >
            <div>
            <IconText  spacing={3} icon={<Wifi />} name="Feed" />
          <IconText  spacing={3} icon={<Feed />} name="Chats" />
          <IconText  spacing={3} icon={<People />} name="Groups" />
          <IconText  spacing={3} icon={<PlayCircle />} name="Videos" />
          <IconText  spacing={3} icon={<Bookmark />} name="Bookmarks" />
          <IconText  spacing={3} icon={<QuestionMark />} name="Questions" />
          <IconText  spacing={3} icon={<Work />} name="Jobs" />
          <IconText  spacing={3} icon={<Event />} name="Events" />
          <IconText  spacing={3} icon={<School />} name="Courses" />
            </div>
            <div className='buttonContainer'>
                <CommonButton  variant="outlined" title="Show More" />
            </div>
            <div style={{marginTop:"20px"}}>
            <Divider light />
            </div>
           <Friend avatar="H" name="Hsu Hlaing Hnin" />
           <Friend avatar="A" name="Anita Poudel" />
           <Friend avatar="K" name="Kumari Dahal" />
           <Friend avatar="L" name="Laxmi Pokhrel" />
           <Friend avatar="H" name="Hsu Hlaing Hnin" />
           <Friend avatar="A" name="Anita Poudel" />
           <Friend avatar="K" name="Kumari Dahal" />
           <Friend avatar="L" name="Laxmi Pokhrel" />
          
        </div>
    )
}


export default LeftSide;