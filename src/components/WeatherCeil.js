import React from "react";

export default class WeatherCeil extends React.PureComponent {
  render() {
    return <td>{this.props.ceil}</td>;
  }
}
