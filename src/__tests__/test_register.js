import React from 'react';
import { shallow } from 'enzyme';
import RegisterView from '../components/register_view';

describe('RegisterView component', () => {

  const component = shallow(<RegisterView />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

});
