import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector,useDispatch } from 'react-redux';
import {openPlantData} from '../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "20px"
    },

    plantBox: {
        display: "flex",
        flexDirection: "column",
        '& img': {
            height: "250px",
            border: "1px solid rgba(192,192,192,0.2)",
            borderRadius: "10px"
        }
    },
    gridFont: {
        fontSize: "12px",
        fontWeight: "700"
    },
    plantCosts:{
        textAlign:"left",
        marginLeft:"5px"
    }
}));

export default function PlantBox() {

    const classes = useStyles();
    const plantData = useSelector(state => state.plantData)
    const dispatch = useDispatch()

    const invokeAction = (ele) => {
        dispatch(openPlantData(ele))
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(plantData).map(ele => {
                    return (
                        <Grid item xs={6} onClick={() => invokeAction(ele)}>
                            <div className={classes.plantBox}>
                                <img src={`/assets/images/${plantData[ele].plantImgURL}`} alt="random-alt"></img>
                            </div>
                            <div className={classes.plantCosts}>
                                <Typography variant="body2" className={classes.gridFont}>
                                    {plantData[ele].plantName}
                                </Typography>
                                <Typography variant="body2" className={classes.gridFont}>
                                    {plantData[ele].plantCost}
                                </Typography>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
