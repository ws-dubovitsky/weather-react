import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AddressDetail from "./AddressDetail";

class App extends Component {
  state = {
    place: {}
  };

  showPlaceDetails(place) {
    console.log(place);
    this.setState({ place });
  }

  render() {
    return (
      <div>
        <SearchBar onPlaceChanged={this.showPlaceDetails.bind(this)} />
        <AddressDetail place={this.state.place} />
      </div>
    );
  }
}

export default App;
