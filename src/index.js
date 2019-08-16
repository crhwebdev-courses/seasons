import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //fires when component first instantiated (1)
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

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

  //fires after constructor and renders content to screen (2)
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
