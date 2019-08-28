import React from 'react';
import { ProjectDisplay, mapStateToProps, mapDispatchToProps} from './ProjectDisplay';
import { getProjects, getPalettes, hasErrored, loadComplete, removePalette } from '../../actions';
import { shallow } from 'enzyme';


describe('ProjectDisplay', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    
    wrapper = shallow(<ProjectDisplay />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})