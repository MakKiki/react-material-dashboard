import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Divider, Typography } from '@material-ui/core';

import { LocationDetails, LocationToolbar } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  typo: {
    'font-size': 25
  }
}));

const Location = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LocationToolbar />
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <Typography className={classes.typo}>Deatils</Typography>
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <LocationDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default Location;
