import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <div className="of">Of</div>
              <div className="the">The</div>
            </span>
            of the day
          </h1>
        </header>
        <h3 className="tagline">
          <span>Fresh Seafood Market</span>
        </h3>
      </>
    );
  }
}

export default Header;
