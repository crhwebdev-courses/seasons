import { useState, useEffect } from 'react';

export default () => {
  // use two functions to set hook for setting state
  // first destructred variable is the state variable
  //and the second is the function for setting state
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //replaces componentDidMount lifecycle method
  useEffect(() => {
    //console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};
