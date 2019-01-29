import { Table } from "reactstrap";
import React from "react";
import WeatherRow from "./WeatherRow";
import WeatherHeader from "./WeatherHeader";
import "./WeatherList.css";

export default class WeatherList extends React.PureComponent {
  render() {
    const { sortBy, sortOrder, data, onSorted } = this.props;
    return (
      <>
        {data.length > 0 ? (
          <Table bordered>
            <thead>
              <tr>
                <WeatherHeader
                  param="dt"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onSorted={onSorted}
                >
                  Date
                </WeatherHeader>
                <WeatherHeader
                  param="main.temp"
                  onSorted={onSorted}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                >
                  Temperature
                </WeatherHeader>
                <WeatherHeader
                  param="weather[0].description"
                  onSorted={onSorted}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                >
                  Weather condition
                </WeatherHeader>
              </tr>
            </thead>
            <tbody>
              {data && data.map(obj => <WeatherRow key={obj.dt} row={obj} />)}
            </tbody>
          </Table>
        ) : null}
      </>
    );
  }
}
