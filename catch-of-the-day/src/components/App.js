import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    console.log('Adding a fish !');
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to that fishes var
    fishes[`fish${Date.now()}`] = fish;

    //3. set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="wes is cool" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
