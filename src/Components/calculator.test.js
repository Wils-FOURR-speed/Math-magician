import React from 'react';
import renderer from 'react-test-renderer';
import CalcDisplay from './calculator';

describe('CalcDisplay', () => {
  test('renders correctly', () => {
    const component = renderer.create(<CalcDisplay />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});