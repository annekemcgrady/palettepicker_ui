import React from 'react';
import { ProjectDisplay, mapStateToProps, mapDispatchToProps} from './ProjectDisplay';
import { getProjects, getPalettes, removePalette, removeProject, getColors, hasErrored, loadComplete } from '../../actions';
import { shallow } from 'enzyme';


describe('ProjectDisplay', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    props = {
      projects: [{name: 'Kitchen'}, {name: 'Bathroom'}],
      palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}],
      error: '',
      loading: true,
      getProjects: jest.fn(),
      getPalettes: jest.fn(),
      removePalette: jest.fn(),
      removeProject: jest.fn(),
      getColors: jest.fn(),
      hasErrored: jest.fn(),
      loadComplete: jest.fn()
    }
    
    wrapper = shallow(<ProjectDisplay {...props}/>)
    instance = wrapper.instance()
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return state to props', () => {
        let mockState = {
          projects: [{name: 'Kitchen'}, {name: 'Bathroom'}],
          palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}],
          error: '',
          loading: true
       }

       const expected = {
        projects: [{name: 'Kitchen'}, {name: 'Bathroom'}],
        palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}],
        error: '',
        loading: true
     }

       const mappedProps = mapStateToProps(mockState);
       expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
      let mockDispatch;

      beforeEach(() => {
        mockDispatch = jest.fn();
      });

      it('should dispatch getProjects when fetch is called', () => {
          const actionToDispatch = getProjects({
            projects: [{name: 'Kitchen'}, {name: 'Bathroom'}]
          });

          const mappedProps = mapDispatchToProps(mockDispatch);
          mappedProps.getProjects({
            projects: [{name: 'Kitchen'}, {name: 'Bathroom'}]
          });

          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should dispatch getPalettes when fetch is called', () => {
        const actionToDispatch = getPalettes({
          palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}]
        })

        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.getPalettes({
        palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}]
        })

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

      });

      it('should dispatch removePalatte when delete is clicked', () => {
        const actionToDispatch = removePalette({
          id: 2
        })

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.removePalette({
          id: 2
        })
        
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should dispatch removeProject when delete is clicked', () => {
        const actionToDispatch = removeProject({
          id: 2
        })

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.removeProject({
          id: 2
        })
        
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should dispatch getColors when new hexcode displays', () => {
        const actionToDispatch = getColors({
          color_one: '#123456', 
          color_two: '#123456', 
          color_three: '#123456', 
          color_four: '#123456', 
          color_five: '#123456'
        })

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.getColors({
          color_one: '#123456', 
          color_two: '#123456', 
          color_three: '#123456', 
          color_four: '#123456', 
          color_five: '#123456'
        })

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should dispatch hasErrored if component errors', () => {
        const actionToDispatch = hasErrored({
          error: 'Error loading'
        });

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.hasErrored({
          error: 'Error loading'
        });
        
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should dispatch loading when load ends', () => {
        const actionToDispatch = loadComplete({
          loading: false
        });

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.loadComplete({
          loading: false
        });
        
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      })


  })


})