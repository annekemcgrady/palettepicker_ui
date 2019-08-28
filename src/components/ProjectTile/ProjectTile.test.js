import React from 'react';
import ProjectTile from './ProjectTile';
import { shallow } from 'enzyme';


describe('ProjectTile', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<ProjectTile />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})