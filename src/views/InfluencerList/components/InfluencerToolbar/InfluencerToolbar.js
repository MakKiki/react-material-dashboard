import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  typoSize:{
    'font-size': '30px'
  }
}));

const InfluencerToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <Typography className={classes.typoSize}>Influencer</Typography>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          href=""
        >
          Add influencer
        </Button>
      </div>
    </div>
  );
};

InfluencerToolbar.propTypes = {
  className: PropTypes.string
};

export default InfluencerToolbar;
