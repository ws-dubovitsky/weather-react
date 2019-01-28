import React from "react";
// import WeatherRow from 'WeatherRow'

export default class WeatherList extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.data.list &&
          this.props.data.list.map(obj => (
            <div>{obj.main.temp}</div>
            //   <WeatherRow row={obj}>
          ))}
      </div>
    );
  }
}
