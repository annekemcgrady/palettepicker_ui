import React from 'react';
import { PaletteDisplay, mapStateToProps, mapDispatchToProps} from './PaletteDisplay';
import { getProjects, getPalettes, hasErrored, loadComplete, removePalette } from '../../actions';
import { shallow } from 'enzyme';


describe.skip('PaletteDisplay', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<PaletteDisplay />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})