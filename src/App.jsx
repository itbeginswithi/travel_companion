import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { Header, Map, List } from "./components";
import { getPlacesData, getWeatherData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState();
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    if (filtered) {
      setFilteredPlaces(filtered);
    }
  }, [rating, places]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      
      getWeatherData(coordinates.lat, coordinates.lng)
        .then((data) => {setWeatherData(data);})
        .catch((err) => console.log(err));

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((places) => {
          const filteredPlaces = places?.filter(
            (place) => place.name && place.num_reviews > 0
          ); //returns only places that contain a name
          setPlaces(filteredPlaces);
          console.log(places);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            coordinates={coordinates}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          places={filteredPlaces ? filteredPlaces : places}
          setChildClicked={setChildClicked}
          weatherData={weatherData}
        />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
