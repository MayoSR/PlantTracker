import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from '@material-ui/core/Button';
import {addNewPlant} from '../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px"
    },
    imgExpanded: {
        '& img': {
            height: "400px",
            width: "100%"
        }
    },
    primaryTitle: {
        display: "flex",
        justifyContent: "space-between",
        '& h4': {
            fontSize: "24px",
            fontWeight:700,
        },
        
        marginTop:"20px",
        color:"#357a38"
    },
    secondaryTitle: {
        display: "flex",
        alignItems:"center",
        '& svg':{
            fontSize:"8px",
            marginBottom:"3px"
        },
        '& > *':{
            marginRight:"5px"
        },
        '& p':{
            fontWeight:700,
        },
        color:"#357a38"
    },
    plantStats:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        border:"1px solid rgba(0,0,0,0.1)",
        borderRadius:"10px",
        height:"80px",
        '& svg':{
            fontSize:"28px"
        }
    },
    plantStatsInner:{
        display:"Flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        height:"70%",
    },
    basicInfo:{
        marginTop:"10px",
        marginBottom:"20px",
    }

}));

export default function PlantData(props) {
    const classes = useStyles();
    const selectedPlant = useSelector(state => state.plantData[state.selectedPlant])
    const dispatch = useDispatch()
    
    return (
        <div className={classes.root}>
            <div className={classes.imgExpanded}>
                <img src={`/assets/images/${selectedPlant.plantImgURL}`} alt=""></img>
            </div>
            <div className={classes.dataCard}>
                <div className={classes.primaryTitle}>
                    <Typography variant="h4" gutterBottom>
                        {selectedPlant.plantName}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {selectedPlant.plantCost}
                    </Typography>
                </div>
                <div className={classes.secondaryTitle}>
                    <Typography variant="body2" gutterBottom>
                        {selectedPlant.plantType}
                    </Typography>
                    <FiberManualRecordIcon />
                    <Typography variant="body2" gutterBottom>
                        {selectedPlant.plantGenus}
                    </Typography>
                </div>
                <div className={classes.basicInfo}>
                    <Typography variant="body2" gutterBottom align="left">
                        {selectedPlant.plantInfo}
                    </Typography>
                </div>
                <div className={classes.plantStats}>
                    <div className={classes.plantStatsInner}>
                        <AssessmentIcon style={{color:"#ff9800"}} />
                        {selectedPlant.plantHeight}
                    </div>
                    <div className={classes.plantStatsInner}>
                        <InvertColorsIcon style={{color:"#35baf6"}} />
                        {selectedPlant.plantWateringSchedule}
                    </div>
                    <div className={classes.plantStatsInner}>
                        <WbSunnyIcon style={{color:"#ffeb3b"}} />
                        {selectedPlant.plantTemperature}
                    </div>
                </div>
                <div className={classes.plantClick}>
                    <Button variant="contained" style={{background:"#357a38",color:"white",marginTop:"20px"}} fullWidth onClick={() => dispatch(addNewPlant(selectedPlant))}>
                        Plant!
                    </Button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
