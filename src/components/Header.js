import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title || 'Finantial Times'}</h1>
        <h2>{this.props.subtitle || ''}</h2>
        <button
          className="switch"
          onClick={this.props.switch}>
          Switch Layout
        </button>
      </div>
    );
  }
}

export default Header;
