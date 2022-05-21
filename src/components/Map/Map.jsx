import React, { useEffect } from 'react'
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from '@material-ui/lab';
import GoogleMapReact from 'google-map-react';

import useStyles from './styles';
import mapStyles from './mapStyles';

const Map = ({coordinates, setCoordinates, setBounds, places, setChildClicked, weatherData}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');

  if(!coordinates) return (
    <div className={classes.noCoord}> 
      <p style={{textAlign: 'start'}}>Location coordinates are required to use the map.</p>
      <p style={{textAlign: 'start'}}>Try allowing Travel Companion to access your location.</p>
    </div>
  ) 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child) } //triguered when you click on a restaurant inside the map
      >
        {places?.length && places?.map((place, index) => (
          <div
            classeName={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {
              isMobile ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" style={{zIndex: '5'}}/>
              ) : (
                <Paper elevation={3} className={classes.paper} style={{zIndex: '5'}}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img src={place.photo && place.photo.images.large.url} alt={place.name} className={classes.pointer}/>
                  <Rating size="small" value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }
          </div>
        ))}
        {
          weatherData?.list?.length && weatherData?.list?.map((data, index) => (
            <div key={index} lat={data.coord.lat} lng={data.coord.lon} style={{zIndex: '1'}}>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" height={100}/>
            </div>
          ))
        }
      </GoogleMapReact>  
    </div>
  )
}

export default Map