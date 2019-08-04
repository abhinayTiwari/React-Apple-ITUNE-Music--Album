import React, { Component } from "react";

class Io extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <img src={this.props.artworkUrl100} alt="image is not found" />
        <div class="collection-name">{this.props.collectionName}</div>
        <div class="artist-name">{this.props.artistName}</div>
      </div>
    );
  }
}

export default Io;
