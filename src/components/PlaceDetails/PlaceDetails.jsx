import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({place, selected, refProp}) => {
  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behavior: 'smooth', black: 'start'})
  return (
    <Card>
        <CardMedia
          style={{height: 350}}
          image={place.photo && place.photo.images.large.url}
          title={place.name}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" gutterBottom>{place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Rating value={Number(place.rating)} readOnly/> 
            <Typography variant="subtitle1" gutterBottom>out of {place.num_reviews} reviews</Typography>  
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>  
            <Typography variant="subtitle1" gutterBottom>{place.price_level}</Typography>  
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>  
            <Typography variant="subtitle1" gutterBottom>{place.ranking}</Typography>  
          </Box>
          {
            place?.awards?.map((award, i) => (
              <Box my={1} display="flex" justifyContent="space-between" key={i}>
                <img src={award.images.small} alt={award.display_name}/>
                <Typography variant="subtitle2">{award.display_name}</Typography>
              </Box>
            ))
          }
          {
            place?.cuisine?.map(({name, key}) => (
              <Chip key={key} size="small" label={name} className={classes.chip}/>
            ))
          }
          {
            place?.address && (
              <Typography variant="subtitle2" gutterBottom className={classes.subtitle} color="textSecondary">
                <LocationOnIcon style={{marginRight: '5px'}}/>
                {place.address}
              </Typography>
            )
          }
          {
            place?.phone && (
              <Typography variant="subtitle2" gutterBottom className={classes.spacing} color="textSecondary">
                <PhoneIcon/>
                {place.phone}
              </Typography>
            )
          }
          <CardActions>
            <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
              Trip Advisor  
            </Button>
            <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
              Website 
            </Button>
          </CardActions>
        </CardContent>
    </Card>
  )
}

export default PlaceDetails