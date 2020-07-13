import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Container,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btnPosition: {
    float: 'right'
  }
}));

const LocationDetails = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    name: 'Shen',
    address1: 'Flat 8/Fl., ABC Building',
    address2: '',
    state: 'Alabama',
    city: 'Hong Kong',
    country: 'USA',
    district: 'Kowloon'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <form autoComplete="off" noValidate>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Grid container spacing={3}>
            {/* name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                // helperText="Please specify your name"
                label="Name"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            {/* address line 1 */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 1"
                margin="dense"
                name="address1"
                onChange={handleChange}
                required
                value={values.address1}
                variant="outlined"
              />
            </Grid>
            {/* address line 2 */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 2"
                margin="dense"
                name="address2"
                onChange={handleChange}
                required
                value={values.address2}
                variant="outlined"
              />
            </Grid>
            {/* city */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            {/* district */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="District"
                margin="dense"
                name="district"
                onChange={handleChange}
                required
                value={values.district}
                variant="outlined"
              />
            </Grid>
            {/* country */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            {/* postal code */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Postal Code"
                margin="dense"
                name="postalCode"
                onChange={handleChange}
                required
                value={values.postalCode}
                variant="outlined"
              />
            </Grid>
            {/* image/video */}
            <Grid item xs={12}>
              <Typography>Image/Video</Typography>
              <input type="file" />
            </Grid>
            {/* lanuguage */}
            <Grid item xs={12}>
              <Grid container>
                {/* lanuguage label */}
                <Grid item xs={6}>
                  <br />
                  <Typography>Lanuguage</Typography>
                </Grid>
                {/* lanuguage select */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined">
                    {states.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            {/* currency */}
            <Grid item xs={12}>
              <Grid container>
                {/* currency label */}
                <Grid item xs={6}>
                  <br />
                  <Typography>Currency</Typography>
                </Grid>
                {/* currency select */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined">
                    {states.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
      <Button
        className={classes.btnPosition}
        color="primary"
        variant="contained">
        Save
      </Button>
    </form>
  );
};

LocationDetails.propTypes = {
  className: PropTypes.string
};

export default LocationDetails;
