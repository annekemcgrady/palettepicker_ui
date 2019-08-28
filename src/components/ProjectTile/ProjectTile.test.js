import React from 'react';
import ProjectTile from './ProjectTile';
import { shallow } from 'enzyme';


describe('ProjectTile', () => {
  let wrapper;
  let instance;
  let props;


  beforeEach(() => {
    props = {
      palettes: [{name: ''}]
    }

    wrapper = shallow(<ProjectTile {...props}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})