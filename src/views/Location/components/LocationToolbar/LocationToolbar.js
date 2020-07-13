import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  typosize: {
    'font-size': '30px'
  },
  divColor: {
    backgroundColor: '#A9A9A9'
  }
}));

const LocationToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Typography>Location 〉 Location Name</Typography>
      </div>
      <div className={classes.row}>
        {/* <span className={classes.spacer} /> */}
        <Typography className={classes.typosize}>
          Add Location/ Location Name
        </Typography>
      </div>
      <br />
      <Divider className={classes.divColor} />
      <div className={classes.row} />
    </div>
  );
};

LocationToolbar.propTypes = {
  className: PropTypes.string
};

export default LocationToolbar;
