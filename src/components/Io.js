import React, { Component } from "react";
import Album from "./Album";

var jsonData = require("../data.json");
var results = jsonData.results;

class Io extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick() {
    document.getElementById("display-container").innerText = this.state.value;
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    let album;
    album = results.map(result => (
      <Album
        artworkUrl100={result.artworkUrl100}
        collectionName={result.collectionName}
        artistName={result.artistName}
      />
    ));

    return <div class="main-container">{album}</div>;
  }
}

export default Io;
