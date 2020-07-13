import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { InfluencerToolbar, InfluencerTable } from './components';
import mockData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(5)
  }
}));

const InfluencerList = () => {
  const classes = useStyles();

  const [users, setUsers] = useState(mockData);

  return (
    <div className={classes.root}>
      <InfluencerToolbar />
      <div className={classes.content}>
        <InfluencerTable users={users} setUsers={setUsers}/>
      </div>
    </div>
  );
};

export default InfluencerList;
