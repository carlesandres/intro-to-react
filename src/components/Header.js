import React from 'react';

const Header = (props) => {
  return ([
    <h1>{props.title || 'Finantial Times'}</h1>,
    <h2>{props.subtitle || ''}</h2>
  ]);
};

export default Header;

