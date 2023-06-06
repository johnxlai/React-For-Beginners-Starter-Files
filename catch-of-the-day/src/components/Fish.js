import React from 'react';

class Fish extends React.Component {
  render() {
    const { image, name } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt="" />
      </li>
    );
  }
}
export default Fish;
