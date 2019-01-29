import React from "react";
import WeatherCeil from "./WeatherCeil";

export default class WeatherRow extends React.PureComponent {
  render() {
    return (
      <tr>
        <td>
          <WeatherCeil ceil={this.props.row.dt_txt} />
        </td>
        <td>
          <WeatherCeil ceil={Math.floor(this.props.row.main.temp - 273)} />
        </td>
        <td>
          <WeatherCeil ceil={this.props.row.weather[0].description} />
        </td>
      </tr>
    );
  }
}
