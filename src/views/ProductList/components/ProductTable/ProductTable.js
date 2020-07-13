import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
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
  TablePagination
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

const ProductTable = (props) => {
  const { className, users, setUsers, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState({
    nameOrder: '',
    brandOrder: '',
    priceOrder: '',
    categoryOrder: '',
    mcOrder: '',
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
    } else if (v === 'brand') {
      if (order.brandOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    } else if (v === 'price') {
      if (order.priceOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    } else if (v === 'category') {
      if (order.categoryOrder === 'ascending') {
        desSort(v);
      } else {
        ascSort(v);
      }
    } else if (v === 'mc') {
      if (order.mcOrder === 'ascending') {
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
      // console.log(order.nameOrder);
    } else if (v === 'brand') {
      ascUsers = users.slice().sort((a, b) => (a.brand > b.brand ? 1 : -1));
      setOrder({ brandOrder: 'ascending' });
    } else if (v === 'price') {
      ascUsers = users.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
      setOrder({ priceOrder: 'ascending' });
    } else if (v === 'category') {
      ascUsers = users
        .slice()
        .sort((a, b) => (a.category > b.category ? 1 : -1));
      setOrder({ categoryOrder: 'ascending' });
    } else if (v === 'mc') {
      ascUsers = users.slice().sort((a, b) => (a.mc > b.mc ? 1 : -1));
      setOrder({ mcOrder: 'ascending' });
    } else if (v === 'status') {
      ascUsers = users.slice().sort((a, b) => (a.status > b.status ? 1 : -1));
      setOrder({ statusOrder: 'ascending' });
    }
    setUsers(ascUsers);
    // console.log(users);
  };

  const desSort = (v) => {
    let desUsers;
    if (v === 'name') {
      desUsers = users.slice().sort((a, b) => (a.name > b.name ? -1 : 1));
      setOrder({ nameOrder: 'descending' });
      // console.log(order.nameOrder);
    } else if (v === 'brand') {
      desUsers = users.slice().sort((a, b) => (a.brand > b.brand ? -1 : 1));
      setOrder({ brandOrder: 'descending' });
    } else if (v === 'price') {
      desUsers = users.slice().sort((a, b) => (a.price > b.price ? -1 : 1));
      setOrder({ priceOrder: 'descending' });
    } else if (v === 'category') {
      desUsers = users
        .slice()
        .sort((a, b) => (a.category > b.category ? -1 : 1));
      setOrder({ categoryOrder: 'descending' });
    } else if (v === 'mc') {
      desUsers = users.slice().sort((a, b) => (a.mc > b.mc ? -1 : 1));
      setOrder({ mcOrder: 'descending' });
    } else if (v === 'status') {
      desUsers = users.slice().sort((a, b) => (a.status > b.status ? -1 : 1));
      setOrder({ statusOrder: 'descending' });
    }
    setUsers(desUsers);
    // console.log(users);
  };

  const showCell = (v) => {
    if (v === 'name') {
      if (order.nameOrder === 'ascending') {
        return 'Name ↑';
      } else {
        return 'Name ↓';
      }
    } else if (v === 'brand') {
      if (order.brandOrder === 'ascending') {
        return 'Brand ↑';
      } else {
        return 'Brand ↓';
      }
    } else if (v === 'price') {
      if (order.priceOrder === 'ascending') {
        return 'Price ↑';
      } else {
        return 'Price ↓';
      }
    } else if (v === 'category') {
      if (order.categoryOrder === 'ascending') {
        return 'Category ↑';
      } else {
        return 'Category ↓';
      }
    } else if (v === 'mc') {
      if (order.mcOrder === 'ascending') {
        return 'MC? ↑';
      } else {
        return 'MC? ↓';
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
                    <Button onClick={() => sort('brand')}>
                      {showCell('brand')}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('price')}>
                      {showCell('price')}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('category')}>
                      {showCell('category')}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => sort('mc')}>{showCell('mc')}</Button>
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
                    {/* Brand */}
                    <TableCell>{user.brand}</TableCell>
                    {/* Price */}
                    <TableCell>{user.price}</TableCell>
                    {/* Category */}
                    <TableCell>{user.category}</TableCell>
                    {/* MC */}
                    <TableCell>{user.mc}</TableCell>
                    {/* Status */}
                    <TableCell>{user.status}</TableCell>
                    {/* Action */}
                    <TableCell>{user.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      {/* <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions> */}
    </Card>
  );
};

ProductTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default ProductTable;
