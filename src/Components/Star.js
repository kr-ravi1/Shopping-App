import React, { Fragment } from 'react';
import StarIcon from '@mui/icons-material/Star';;


const Star = ({ rate }) => {
    const starcCount = Math.round(rate);
    return (
        <Fragment>
            
            {[...Array(5)].map((star, indx) => {
                return (
                    <StarIcon key={indx} sx={starcCount >= indx + 1  ? { color:"#efda1f"}:{color:"#eee"}}/>
                ) 
            })}
        
        </Fragment>
    )
}
export default Star;