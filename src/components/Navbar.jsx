import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position:"fixed",
    bottom:0,
    left:0,
    right:0,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeOutlinedIcon />}/>
        <Tab icon={<SearchOutlinedIcon />} />
        <Tab icon={<TodayOutlinedIcon />} />
        <Tab icon={<PersonPinOutlinedIcon />} />
      </Tabs>
    </Paper>
  );
}
