import React from 'react';
import renderer from 'react-test-renderer';
import Home from './HomePage';

describe('Home', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});