import React from 'react';
import PaletteTile from './PaletteTile';
import { shallow } from 'enzyme';

describe('PaletteTile', () => {
  let wrapper;
  let props;

  beforeEach(() => {

    props = {
      isLocked:false,
      hexCode: '#123ABC',
      id: '#123ABC',
      lockColor: jest.fn()
    }
  
    wrapper = shallow(<PaletteTile {...props} />);
  })

  it('should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

})

