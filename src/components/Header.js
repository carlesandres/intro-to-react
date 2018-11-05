import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };

    this.incrementLikes = this.incrementLikes.bind(this);
  }

  componentDidMount() {
    // We are increasing the number of likes by 1 every second
    setInterval( () => {
      const newState = this.state.likes + 1;
      this.setState({ likes: newState });
    }, 5000);
  }

  incrementLikes(event) {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.title || 'Finantial Times'}</h1>
        <h2>{this.props.subtitle || ''}</h2>
        <div>Likes: {this.state.likes}</div>
        <button onClick={this.incrementLikes}>Like</button>
      </div>
    );
  }
}

export default Header;
