import React from 'react';
import { ProjectDisplay, mapStateToProps, mapDispatchToProps} from './ProjectDisplay';
import { getProjects, getPalettes, hasErrored, loadComplete, removePalette } from '../../actions';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';


describe('ProjectDisplay', () => {
  let wrapper;
  let instance;
  let props;

  it.skip('should match the snapshot', ()=>{

  })




})