import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import PlantTaskBox from './PlantTaskBox';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px"
    },
    paperClass: {
        borderRadius: "20px",
        marginBottom: "20px",
        overflow: "hidden"
    },

}));

export default function OutlinedChips() {
    const classes = useStyles();
    const yourPlants = useSelector(state => state.yourPlants)
    

    return (
        <div className={classes.root}>
            {
                Object.keys(yourPlants).map((ele) => {
                    return <Paper elevation={1} className={classes.paperClass}>
                        <PlantTaskBox plantData={yourPlants[ele]} plantID = {ele} />
                    </Paper>
                })
            }
            <br></br>
            <br></br>
        </div>
    );
}
