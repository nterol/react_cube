import React, { Component } from "react";

export class Shape extends Component {
  componentDidMount() {
    this.refs.comp.onClick = e => this.handleClick(e);
  }

  handleClick = e => {
    console.log("hey salut ça va ou pas ");
  };

  render() {
    const { translation, color } = this.props;
    return (
      <transform is translation={translation} ref="comp">
        <shape>
          <appearance>
            <material is diffuseColor={color} />
          </appearance>
        </shape>
      </transform>
    );
  }
}
