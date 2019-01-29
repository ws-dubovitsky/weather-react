import React from "react";
import WeatherCeil from "./WeatherCeil";

export default class WeatherRow extends React.PureComponent {
  render() {
    return (
      <tr>
        <WeatherCeil ceil={this.props.row.dt_txt} />
        <WeatherCeil ceil={Math.floor(this.props.row.main.temp - 273)} />
        <WeatherCeil ceil={this.props.row.weather[0].description} />
      </tr>
    );
  }
}
