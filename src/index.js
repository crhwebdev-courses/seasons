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

  return <div>Hi There</div>;
};

class AppClass extends React.Component {
  //fires when component first instantiated (1)
  // constructor(props) {
  //   super(props);
  // }

  state = { late: null, errorMessage: '' };

  //fires right after content shows up on screen (3)
  componentDidMount() {
    //console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //fires right after a component updates--from state change (4)
  //this will hapen after componentDidMount when component is first rendered
  //and then will happen every time the component is updated
  // componentDidUpdate() {
  //   console.log('My compnent just upated--it rerendered!');
  // }

  //fires before component unmounts and is used for clean up (5)
  // componentWillUnmount(){

  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Retrieving Position..." />;
  }

  //fires after constructor and renders content to screen (2)
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
