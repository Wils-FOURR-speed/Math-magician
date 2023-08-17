import React from 'react';
import renderer from 'react-test-renderer';
import ShowQuotes from './quote';

describe('ShowQuotes', () => {
  test('renders correctly', () => {
    const component = renderer.create(<ShowQuotes />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});