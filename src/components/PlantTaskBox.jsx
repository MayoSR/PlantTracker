import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React,{useReducer} from 'react';
import { useDispatch } from 'react-redux';
import { updateYourPlantData } from '../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px"
    },
    secondaryTitle: {
        display: "flex",
        alignItems: "center",
        '& svg': {
            fontSize: "8px",
            marginBottom: "3px"
        },
        '& > *': {
            marginRight: "5px"
        },
        '& p': {
            fontWeight: 700,
        },
        color: "#357a38"
    },
    imgContainer: {
        '& img': {
            height: "60px",
            width: "60px",
            borderRadius: "20px",
        }
    },
    paperClass: {
        borderRadius: "20px",
        marginBottom: "20px",
        overflow: "hidden"
    },
    taskAbout: {
        marginLeft: "20px"
    },
    primaryTitle: {
        display: "flex",
        justifyContent: "space-between",
        color: "#357a38"
    },
    tasklist: {
        display: "flex"
    },
    heading: {
        color: "#357a38",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        width: "100%"
    }

}));


function reducer(state,action){
    switch(action.type){
        case 'RESET_CHECKBOXES':
            console.log(state)
            action.dispatch(updateYourPlantData(state,action.plantID))
            return {}
        case 'CHECK_CHECKBOX':
            if(action.task in state){
                if (state[action.task]){
                    return {...state,[action.task]:false}
                }
                else{
                    return {...state,[action.task]:true}
                }
            }
            else{
                return {...state,[action.task]:true}
            }
        default: return state

    }
}

let checkboxArr = {}

export default function PlantTaskBox(props) {

    const classes = useStyles();
    const [checkboxState, checkboxDispatch] = useReducer(reducer, checkboxArr)

    const dispatch = useDispatch()



    return (
        <>
            <Box display="flex" alignItems="center" style={{ padding: "20px" }}>
                <div className={classes.imgContainer}>
                    <img src={`/assets/images/${props.plantData.plantImgURL}`} alt=""></img>
                </div>
                <div className={classes.taskAbout}>
                    <div className={classes.primaryTitle}>
                        <Typography variant="body1" gutterBottom>
                            {props.plantData.plantName}
                        </Typography>
                    </div>
                    <div className={classes.secondaryTitle}>
                        <Typography variant="body2" gutterBottom>
                            {props.plantData.plantType}
                        </Typography>
                        <FiberManualRecordIcon />
                        <Typography variant="body2" gutterBottom>
                            {Object.keys(props.plantData.plantTaskList).length} tasks
                                    </Typography>
                        <FiberManualRecordIcon />

                        <Button onClick={(e) => checkboxDispatch({type:"RESET_CHECKBOXES",dispatch:dispatch,plantID:props.plantID})} variant="contained" size="small" color="secondary" style={{ padding: "5px", minWidth: "30px", marginBottom: "5px", height: "20px" }}>
                            Update
                        </Button>

                    </div>
                </div>
            </Box>
            <Divider />
            <Box display="flex" flexDirection="column">
                {Object.keys(props.plantData.plantTaskList).map(task => {
                    return <div className={classes.tasklist}>
                        <Accordion style={{ width: "100%" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: "100%" }}>

                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => checkboxDispatch({type:"CHECK_CHECKBOX",task:task})}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox checked={checkboxState[task] === undefined ? false : true} />}
                                        label={task}
                                    />
                                    {(props.plantData.plantTaskList[task].taskCompletedAt != null) ? (
                                        <Typography variant="caption" style={{ fontStyle: "italic" }}>
                                            Last updated on : {props.plantData.plantTaskList[task].taskCompletedAt}
                                        </Typography>) : <></>
                                    }

                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="textSecondary">
                                    {props.plantData.plantTaskList[task].taskData}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>



                    </div>
                })}
            </Box>
        </>
    )
}
