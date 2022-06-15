import React, { Component } from 'react';

export class InputAuthor extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.value}
          placeholder="Enter author name"
          onChange={this.props.change}
        />
      </>
    );
  }
}
