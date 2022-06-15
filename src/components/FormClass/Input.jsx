import React, { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.value}
          placeholder="Пиши текст, тут"
          onChange={this.props.change}
          style={{ marginRight: '10px' }}
        />
      </>
    );
  }
}
