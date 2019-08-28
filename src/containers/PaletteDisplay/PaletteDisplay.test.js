import React from 'react';
import { PaletteDisplay, mapStateToProps, mapDispatchToProps} from './PaletteDisplay';
import { getColors } from '../../actions';
import { shallow } from 'enzyme';


describe('PaletteDisplay', () => {
  let wrapper;
  let instance;
  let props;


  beforeEach(() => {
  props = {
    colors: [{hexCode:'#123457', isLocked: false}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}],
    setColors: jest.fn()
  };

  wrapper = shallow(<PaletteDisplay{...props}/>);
  instance = wrapper.instance();

})

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();

  })

 describe('generateColors', () => {
  it.skip('should call generateColors when Generate New Colors button clicked', ()=> {
      
      instance.generateColors = jest.fn();
      wrapper.find('.generate-new-palette-button').simulate('click')
      expect(instance.generateColors).toHaveBeenCalled()
    })

  it('should dispatch a setColors action with an array of five hexcodes', ()=> {

  })

})

 describe('lockColor', ()=> {

  it('should call setColors with a new array of colors, ()=> {
    let expected = [{hexCode:'#123457', isLocked: true}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}, {hexCode:'#123456', isLocked: false}]
    instance.lockColor('#123457')
    const mockDispatch = jest.fn();
    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })

  it('should dispatch a setColors action with an array of five hexcodes', ()=> {

  })

  })

  describe('mapStateToProps', ()=> {

    it('should return colors from store', () => {
      const mockState = {
          colors: [{color: '123456'}, {color: 'ffffff'}]
      }

      const expected = {
          colors: [{color: '123456'}, {color: 'ffffff'}]
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
  });

  })

  describe('mapDispatchToProps', ()=> {

    it('should call dispatch with a setColors action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getColors([{hexCode: '#123ABC'}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setColors([{hexCode: '#123ABC'}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

})