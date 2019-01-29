import React from "react";

export default class WeatherHeader extends React.PureComponent {
    
  sortSign = arg => {
    const { sortBy, sortOrder } = this.props;
    if (sortBy !== arg) {
      return "";
    } else if (sortBy === arg && sortOrder === "asc") {
      return "+";
    } else if (sortBy === arg && sortOrder === "desc") {
      return "-";
    }
  };

  onSorted = () => {
    this.props.onSorted(this.props.param);
  };

  render() {
    return (
      <th onClick={this.onSorted}>
        {this.sortSign(this.props.param)}
        {this.props.children}
      </th>
    );
  }
}
