import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflowX: "scroll",
        padding: "20px 0px",
        '& > a': {
            marginLeft: "10px",
            border:"none"
        },
    },
    chipStyle:{
        '&:active':{
            background:"rgba(162, 207, 110,0.3)"
        }
    }

}));

export default function OutlinedChips() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {["Indoor Plants", "Outdoor Plants", "Desk Plant", "Office Plant", "Living Room Plant", "Balcony Plant"].map(ele => {
                if(ele === "Indoor Plants"){
                    return <Chip label={ele} className={classes.chipStyle} style={{background:"rgba(162, 207, 110,0.3)"}} component="a" href="#chip" clickable variant="outlined" />
                }
                else{
                    return <Chip label={ele} component="a" href="#chip" clickable variant="outlined" />
                }
            })}
        </div>
    );
}
