import React from 'react';
import PaletteTile from './PaletteTile';
import { shallow } from 'enzyme';


describe('PaletteTile', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<PaletteTile />)
  })

  it.skip('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });


})