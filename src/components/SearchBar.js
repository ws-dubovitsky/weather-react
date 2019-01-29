import React from "react";
import { Form, InputGroup } from "reactstrap";
/* global google */

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  };

  render() {
    return (
      <Form>
        <InputGroup>
          <input
            className="form-control"
            ref={this.autocompleteInput}
            id="autocomplete"
            placeholder="Enter your address"
            type="text"
          />
        </InputGroup>
      </Form>
    );
  }
}
