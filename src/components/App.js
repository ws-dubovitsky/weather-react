import React from "react";
import { WeatherAPIRequest } from "../utils/axios";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import { get } from "lodash";

export default class App extends React.Component {
  state = {
    place: {},
    weather: [],
    sortBy: "dt",
    sortOrder: "asc"
  };

  onSorted = arg => {
    const cloneWeather = JSON.parse(JSON.stringify(this.state.weather));
    const { sortBy, sortOrder } = this.state;
    console.log(
      "sortBy, sortOrder11111",
      this.state.sortBy,
      this.state.sortOrder
    );

    this.setState({
      weather: cloneWeather.sort(function(a, b) {
        if (get(a, sortBy) < get(b, sortBy)) {
          return sortOrder === "asc" ? 1 : -1;
        }
        if (get(a, sortBy) > get(b, sortBy)) {
          return sortOrder === "asc" ? -1 : 1;
        }
        // a должно быть равным b
        return 0;
      }),
      sortBy: arg,
      sortOrder: sortBy === arg && sortOrder === "asc" ? "desc" : "asc"
    });
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
        // console.log("this.state", this.state);
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
            <WeatherList
              sortOrder={this.state.sortOrder}
              sortBy={this.state.sortBy}
              onSorted={this.onSorted}
              data={this.state.weather}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
