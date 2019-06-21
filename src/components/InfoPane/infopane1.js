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
          <Tab label="About the project" />
          <Tab label="The tests" />
          <Tab label="How to help" />
          
        </Tabs>
      </AppBar>
      {value === 0 && <Infopane>
       <p> The mission of the watershed guardians is to preserve and eventually restore the Carmel River and watershed to its former health and beauty. 
       <br /> <br />
      <b>Why should you care?</b> 
        <br />

        <p>About 90% of the entire county depends on the Carmel River for water. We've conducted tests, that measure a variety of factors, which show the Carmel river deteriorating at various points on its path.</p>
        <p>We hope our data and information will help shouldq</p>
       </p>

      </Infopane>}
      {value === 1 && <Infopane>abc</Infopane>}
      {value === 2 && <Infopane> 
      <p>
      <b>Volunteering:</b> 
      <br />
      The Carmel River Watershed Conservancy always welcomes volunteering by local residents and those who consider themselves stewards of the Carmel River.  We participate with Carmel River Steelhead Association(CRSA) members and the Monterey Peninsula Water Management District staff in fish rescues when the river flows begin to trap or isolate steelhead.  Also, CRWC periodically works with other organizations in cleanup activities along the river and in tributary streams and creeks.
      <br />

      <b> Other resources: </b>
      <em>https://www.carmelriverwatershed.org/</em>

      </p>
      </Infopane>}
      
      
    </div>
  );
}