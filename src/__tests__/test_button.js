import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/button';

describe('Button component', () => {

  const component = shallow(<Button />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

});