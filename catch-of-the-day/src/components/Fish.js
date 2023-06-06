import React from 'react';

class Fish extends React.Component {
  render() {
    const { image, name } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
      </li>
    );
  }
}
export default Fish;
