import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    const placeType = type.toLowerCase();
    try {
        //request
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${placeType}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY 
            }
          });
        return data;

    } catch (error) {
        console.log({error})
    }
}

export const getWeatherData = async (lat, lon) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {
        lat: lat,
        lon: lon,
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY
      }
    })

    return data;
  } catch (error) {
    console.log(error)
  }
}