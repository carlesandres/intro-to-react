import React from 'react';
import Header from './Header';
import Article from './Article';

const Main = () => {
  return (
    <div className="main">
      <Header
        title="THE DAILY PAPER"
        subtitle="News, gossip and whatnot"
      />
      <Article text="Paul is dead." />
      <Article text="Strawberry fields forever." />
    </div>
  );
};

export default Main;
