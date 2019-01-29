import React from "react";
import SearchBar from "./SearchBar";
// import axios from "axios";
import WeatherList from "./WeatherList";
import { WeatherAPIRequest } from "../utils/axios";
import { Container, Row, Col } from "reactstrap";

export default class App extends React.Component {
  state = {
    place: {},
    weather: []
  };

  showPlaceDetails = async place => {
    const response = await WeatherAPIRequest.get("/data/2.5/forecast", {
      params: {
        lat: place.geometry.location.lat(),
        lon: place.geometry.location.lng(),
        appid: "a1940f6091cee8f1939beaa1ed9a82dc"
      }
    });
    this.setState(
      {
        place: place,
        weather: response.data.list
      },
      () => {
        console.log("this.state", this.state);
      }
    );

    // const response2 = await WeatherAPIRequest.get('/data/2.5/weather',{
    //     params: {
    //         q: place.name,
    //         appid: "a1940f6091cee8f1939beaa1ed9a82dc"
    //     }
    // })
    // console.log('response2', response2)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar onPlaceChanged={this.showPlaceDetails} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WeatherList data={this.state.weather} />
          </Col>
        </Row>
      </Container>
    );
  }
}
