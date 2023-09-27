import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
import data from './flats.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }
  componentDidMount() {
    // fetch("https://server.com/flats.json")
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    this.setState({
      flats: data
    });
  }


  render() {
    return (
      <div className="App">
      <div className="main">
        <div className="search">
        </div>
        <div className="flats">
          {this.state.flats.map((flat) => {
            return <Flat flat={flat} />
          })}
        </div>
      </div>
      <div className="map">

      </div>
    </div>
  );
  }
}

export default App;
