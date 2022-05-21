import React, { createRef, useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({coordinates, places, childClicked, isLoading, type, setType, rating, setRating}) => {
  const classes = useStyles();
  console.log({coordinates});

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & attractions around you
      </Typography>
      {
        isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="Restaurants">Restaurants</MenuItem>
                <MenuItem value="Hotels">Hotels</MenuItem>
                <MenuItem value="Attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
            {!coordinates && (
              <div className={classes.noCoord}> 
                <p style={{textAlign: 'start'}}>Location coordinates are required to browse restaurants, hotels, and attractions in your area.</p>
                <p style={{textAlign: 'start'}}>Try allowing Travel Companion to access your location.</p>
              </div>
            )}
            {places.length === 0 && coordinates && (
              <div className={classes.noCoord}> 
                <p style={{textAlign: 'start'}}>No {type.toLowerCase()} were found in this location.</p>
              </div>
            )}
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid item key={place.location_id} xs={12}>
                  <PlaceDetails place={place} selected={Number(childClicked) === i}/>
                </Grid>
              ))}
            </Grid>
          </>  
        )
      }
    </div>
  );
};

export default List;
