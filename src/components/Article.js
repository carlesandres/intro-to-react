import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

    console.log('This is invoked whenever a new article is instantiated');
  }

  componentWillMount() {
    console.log('This is invoked just before an instance is going to be rendered for the first time');
  }

  componentDidMount() {
    console.log('This is invoked after the component has been rendered for the first time');
  }

  render() {
    return (
      <>
        <p>{this.props.text}</p>
      </>
    );
  }
}

export default Article;
