import React from "react";
import WeatherRow from "./WeatherRow";
import { Table } from "reactstrap";

export default class WeatherList extends React.PureComponent {
  render() {
    return (
      <>
        {this.props.data.length > 0 ? (
          <Table bordered>
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Weather condition</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data &&
                this.props.data.map(obj => (
                  <WeatherRow key={obj.dt} row={obj} />
                ))}
            </tbody>
          </Table>
        ) : null}
      </>
    );
  }
}
