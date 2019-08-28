import React from 'react';
import PaletteTile from './PaletteTile';
import { shallow } from 'enzyme';


describe.skip('PaletteTile', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<PaletteTile />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


  })


})