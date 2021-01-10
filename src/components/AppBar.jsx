import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {closePlantData,viewYourPlants} from '../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "none"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const plantBoxState = useSelector(state => state.plantBoxOpen)
    const plantView = useSelector(state => state.plantView)
    const dispatch = useDispatch()


    return (

        plantBoxState && !plantView ?
            <div className={classes.root}>
                <AppBar position="static" style={{ boxShadow: "none" }}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Planter
                        </Typography>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <SpaOutlinedIcon onClick={() => dispatch(viewYourPlants())} />
                            </IconButton>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
            :
            <div className={classes.root}>
                <AppBar position="static" style={{ boxShadow: "none" }}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ArrowBackIcon onClick={() => dispatch(closePlantData())} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>


    );
}
