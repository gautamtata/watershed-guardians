import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import './infopane.css'

function Infopane(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

Infopane.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div id = "AppBar" className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="About" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <Infopane>
       <p> The goal of the watershed guardians program is to investigate river ecosystems and their associated watersheds. 
       In particular, <b>we emphasize science that will help us to better conserve Carmel river. 
       This conservation research includes long-term monitoring to detect changes over time, and short-term projects focused on understanding and diminishing threats to river habitats and communities.</b> <br />
      <b>Why should you care?</b> 
       <ul className="effect">
          <li>About 90% of the county directly depends on the river as a source of water</li>
          <li>Effects of climate change could cause chemical imbalances in the river essentially wiping out ecosystems</li>
          <li>You, your family and your children are going to be drinking this water.</li>
       </ul>
       
       
       </p>

      </Infopane>}
      {value === 1 && <Infopane>Item Two</Infopane>}
      {value === 2 && <Infopane>Item Three</Infopane>}
      {value === 3 && <Infopane>Item Four</Infopane>}
    </div>
  );
}