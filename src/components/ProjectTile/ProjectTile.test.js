import React from 'react';
import ProjectTile from './ProjectTile';
import { shallow } from 'enzyme';


describe.skip('ProjectTile', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<ProjectTile />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})