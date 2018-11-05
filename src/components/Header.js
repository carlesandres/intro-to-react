import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <h1>{this.props.title || 'Finantial Times'}</h1>,
      <h2>{this.props.subtitle || ''}</h2>
    ]);
  }
}

export default Header;
