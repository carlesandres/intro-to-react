import React from 'react';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';

test('Header renders as expect with no params', () => {
  const component = renderer.create(
    <Header />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
