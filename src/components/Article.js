import React from 'react';

class Article extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('This is called before every call to "render"');
    console.log('props', props);
    console.log('state', state);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('This is called every time the component is updated');
    console.log('prevProps', prevProps);
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
