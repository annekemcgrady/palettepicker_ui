import React from 'react';
import { PaletteForm, mapStateToProps, mapDispatchToProps } from './PaletteForm';
import { addPalette, hasErrored } from '../../actions';
import { shallow } from 'enzyme';

describe('PaletteForm', () => {
    let wrapper;
    let instance;
    let props;

    beforeEach(() => {
        props = {
            palettes: [{name: 'Golden Hour', color_one: '#123456', color_two: '#123456', color_three: '#123456', color_four: '#123456', color_five: '#123456'}],
            projects: [{name: 'Dream House'}],
            error: '',
            addPalette: jest.fn(),
            hasErrored: jest.fn()
        };
        wrapper = shallow(<PaletteForm {...props}/>);
        instance = wrapper.instance();
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange when name input is detected', () => {
        const mockNameEvent = {
            target: { name: 'name', value: 'Golden Hour' }
        }

        instance.handleChange = jest.fn();

        wrapper.find('.palette-form-input').simulate('change', mockNameEvent);
        expect(wrapper.state('name')).toEqual('Golden Hour')
    });

    // it('should call handleChange when an option is selected', () => {

    // });

    it('should call handleSubmit when save button is clicked', () => {
        const mockEvent = { preventDefault: jest.fn() };
        instance.handleSubmit = jest.fn();

        wrapper.find('.palette-form-btn').simulate('click', mockEvent);
        expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent)
    });

    it('should update state when handleChange is called', () => {
        const mockNameEvent = {
            target: { name: 'name', value: 'Golden Hour' }
        }

        const expected = 'Golden Hour';

        instance.handleChange(mockNameEvent);
        expect(wrapper.state('name')).toEqual(expected)

    });

    it('should post a new palette when handleSubmit is called', () => {
        const mockName = 'Golden Hour'

        instance.postPalette = jest.fn();
        instance.postPalette(mockName);

        expect(instance.postPalette).toHaveBeenCalledWith(mockName)
    });

    it('should reset state when clearInputs is called', () => {
        const expected = ''

        instance.setState({ name: 'Golden Hour' })
        instance.clearInputs();

        expect(wrapper.state('name')).toEqual(expected)
    });

    describe('mapStateToProps', () => {
        it('should return projects, palettes, and error from store', () => {
            const mockState = {
                palettes: [{name: 'Golden Hour'}, {name: 'London Fog'}],
                colors: [{color: '123456'}, {color: 'ffffff'}],
                projects: [{name: 'Dream House'}, {name: 'Brunch Fest'}],
                error: ''
            }

            const expected = {
                palettes: [{name: 'Golden Hour'}, {name: 'London Fog'}],
                colors: [{color: '123456'}, {color: 'ffffff'}],
                projects: [{name: 'Dream House'}, {name: 'Brunch Fest'}],
                error: ''
            }

            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(expected)
        });
    });

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn()
        });

        it('should dispatch addPalette when handleSubmit is called', () => {
            const actionToDispatch = addPalette({
                palette: {name: 'London Fog'}
            })

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.addPalette({
                palette: {name: 'London Fog'}
            });

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should dispatch hasErrored on handleSubmit if there is an error', () => {
            const actionToDispatch = hasErrored({
                error: {error : 'Error adding palette'}
            });

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.hasErrored({
                error: {error: 'Error adding palette'}
            });

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})