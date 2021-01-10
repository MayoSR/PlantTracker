import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function OutlinedChips() {
    const classes = useStyles();
    const yourPlants = useSelector(state => state.yourPlants)
    const dispatch = useDispatch()
    let selectedTasks = {}

    console.log(yourPlants)

    const selectedTask = (plantID,event) =>{
        dispatch(updateYourPlantData(selectedTasks))
    }

    const selectedBoxes = (e,task,plantID) => {

        if(e.target.checked){
            if(plantID in selectedTasks){
                selectedTasks[plantID].push(task)
            }
            else{
                selectedTasks[plantID] = [task]
            }
        }
        else{
            selectedTasks[plantID].splice(selectedTasks[plantID].indexOf(task),1)
        }
    }

    return (
        <div className={classes.root}>
            {
                Object.keys(yourPlants).map((ele) => {
                    return <Paper elevation={1} className={classes.paperClass}>
                        <Box display="flex" alignItems="center" style={{ padding: "20px" }}>
                            <div className={classes.imgContainer}>
                                <img src={`/assets/images/${yourPlants[ele].plantImgURL}`} alt=""></img>
                            </div>
                            <div className={classes.taskAbout}>
                                <div className={classes.primaryTitle}>
                                    <Typography variant="body1" gutterBottom>
                                        {yourPlants[ele].plantName}
                                    </Typography>
                                </div>
                                <div className={classes.secondaryTitle}>
                                    <Typography variant="body2" gutterBottom>
                                        {yourPlants[ele].plantType}
                                    </Typography>
                                    <FiberManualRecordIcon />
                                    <Typography variant="body2" gutterBottom>
                                        {Object.keys(yourPlants[ele].plantTaskList).length} tasks
                                    </Typography>
                                    <FiberManualRecordIcon />

                                    <Button onClick={(e) => selectedTask(yourPlants[ele].plantID,e)} variant="contained" size="small" color="secondary" style={{padding:"5px",minWidth:"30px",marginBottom:"5px",height:"20px"}}>
                                        Update
                                    </Button>

                                </div>
                            </div>
                        </Box>
                        <Divider />
                        <Box display="flex" flexDirection="column">
                            {Object.keys(yourPlants[ele].plantTaskList).map(task => {
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
                                                    onClick={(event) => selectedBoxes(event,task,ele)}
                                                    onFocus={(event) => event.stopPropagation()}
                                                    control={<Checkbox />}
                                                    label={task}
                                                />
                                                {(yourPlants[ele].plantTaskList[task].taskCompletedAt != null) ? (
                                                <Typography variant="caption" style={{ fontStyle: "italic" }}>
                                                    Last updated on : {yourPlants[ele].plantTaskList[task].taskCompletedAt}
                                                </Typography>) : <></>
                                                }

                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography color="textSecondary">
                                                {yourPlants[ele].plantTaskList[task].taskData}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>



                                </div>
                            })}
                        </Box>
                    </Paper>
                })
            }
            <br></br>
            <br></br>
        </div>
    );
}
