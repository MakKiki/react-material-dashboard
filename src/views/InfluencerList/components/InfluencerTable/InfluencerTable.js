import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const InfluencerTable = (props) => {
  const { className, users, setUsers, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState({
    nameOrder: '',
    languageOrder: '',
    statusOrder: ''
  });

  const handleSelectAll = (event) => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map((user) => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const sort = (v) => {
    if (v === 'name') {
      if (order.nameOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    } else if (v === 'language') {
      if (order.languageOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    } else if (v === 'status') {
      if (order.statusOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    }
  };

  const ascSort = (v) => {
    let ascUsers;
    if (v === 'name') {
      ascUsers = users.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
      setOrder({ nameOrder: 'ascending' });
    } else if (v === 'language') {
      ascUsers = users
        .slice()
        .sort((a, b) => (a.language > b.language ? 1 : -1));
      setOrder({ languageOrder: 'ascending' });
    } else if (v === 'status') {
      ascUsers = users.slice().sort((a, b) => (a.status > b.status ? 1 : -1));
      setOrder({ statusOrder: 'ascending' });
    }
    setUsers(ascUsers);
  };

  const desSort = (v) => {
    let desUsers;
    if (v === 'name') {
      desUsers = users.slice().sort((a, b) => (a.name > b.name ? -1 : 1));
      setOrder({ nameOrder: 'descending' });
    } else if (v === 'language') {
      desUsers = users
        .slice()
        .sort((a, b) => (a.language > b.language ? -1 : 1));
      setOrder({ languageOrder: 'descending' });
    } else if (v === 'status') {
      desUsers = users.slice().sort((a, b) => (a.status > b.status ? -1 : 1));
      setOrder({ statusOrder: 'descending' });
    }
    setUsers(desUsers);
  };

  const showCell = (v) => {
    if (v === 'name') {
      if (order.nameOrder === 'ascending') {
        return 'Name ↑';
      } else {
        return 'Name ↓';
      }
    } else if (v === 'language') {
      if (order.brandOrder === 'ascending') {
        return 'Language ↑';
      } else {
        return 'Language ↓';
      }
    } else if (v === 'status') {
      if (order.statusOrder === 'ascending') {
        return 'Status ↑';
      } else {
        return 'Status ↓';
      }
    }
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < users.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('name')}>
                      {showCell('name')}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('language')}>
                      {showCell('language')}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('status')}>
                      {showCell('status')}
                    </Button>
                  </TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map((user) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(user.id) !== -1}
                        color="primary"
                        onChange={(event) => handleSelectOne(event, user.id)}
                        value="true"
                      />
                    </TableCell>
                    {/* name */}
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar className={classes.avatar} src={user.avatarUrl}>
                          {getInitials(user.name)}
                        </Avatar>
                        <Typography variant="body1">{user.name}</Typography>
                      </div>
                    </TableCell>
                    {/* Language */}
                    <TableCell>{user.language}</TableCell>
                    {/* Status */}
                    <TableCell>{user.status}</TableCell>
                    {/* Action */}
                    <TableCell>{user.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

InfluencerTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default InfluencerTable;
