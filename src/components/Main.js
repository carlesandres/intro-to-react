import React from 'react';
import Header from './Header';
import Article from './Article';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paulAlive: true
    };

    this.togglePaul = this.togglePaul.bind(this);
  }

  togglePaul() {
    this.setState( { paulAlive: !this.state.paulAlive } );
  }

  render() {
    const paulState = this.state.paulAlive ? 'alive' : 'dead';
    const article2 = this.state.paulAlive ?
      null :
      <Article text="Strawberry fields forever." />;


    return (
      <div className="main">
        <Header
          title="THE DAILY PAPER"
          subtitle="News, gossip and whatnot"
          switch={this.togglePaul}
        />
        <Article text={`Paul is ${paulState}.`} />
        {article2}
      </div>
    );
  }
}

export default Main;
