import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
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

  //render content based on conditions
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Retrieving Position..." />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
