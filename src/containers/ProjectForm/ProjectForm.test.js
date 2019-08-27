import React from 'react';
import { ProjectForm, mapStateToProps, mapDispatchToProps } from './ProjectForm';
import { addProject, hasErrored } from '../../actions';
import { shallow } from 'enzyme';

describe('ProjectForm', () => {
    let wrapper;
    let instance;
    let props;

    beforeEach(() => {
        props = {
            projects: [{name: 'Loft'}, {name: 'Tiny House'}],
            error: '',
            loading: true,
            addProject: jest.fn(),
            hasErrored: jest.fn()
        };

        wrapper = shallow(<ProjectForm {...props}/>)
        instance = wrapper.instance();
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should call handleChange when name input is detected', () => {
        const mockNameEvent = {
            target: {name: 'name', value: 'Dream House'}
        }

        instance.handleChange = jest.fn()
        wrapper.find('.project-form-input').simulate('change', mockNameEvent)

        expect(wrapper.state('name')).toEqual('Dream House')
    });

    it('should set state when handleChange is called', () => {
        const mockNameEvent = {
            target: {name: 'name', value: 'Dream House'}
        }

        const expected = 'Dream House';
        instance.handleChange(mockNameEvent);

        expect(wrapper.state('name')).toEqual(expected)
    });

    it('should call handleSubmit when save button is clicked', () => {
        const mockEvent = {preventDefault: jest.fn()}
        instance.handleSubmit = jest.fn()

        wrapper.find('.project-form-btn').simulate('click', mockEvent);
        expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent)

    });

    it('should post a new project when handleSubmit is called', () => {
        const mockName = 'Dream House'
        instance.postProject = jest.fn();

        instance.postProject(mockName)
        expect(instance.postProject).toHaveBeenCalledWith(mockName)
    });

    it('should reset state when clearInputs is called', () => {
        const expected = {name: ''}

        instance.setState({name: 'Dream House'});
        instance.clearInputs();

        expect(wrapper.state()).toEqual(expected)
    });

    describe('mapStateToProps', () => {
        const mockState = {
            projects: [{name: 'Dream House'}, {name: 'Loft'}],
            error: '',
            loading: true
        }
        
        const expected = {
            projects: [{name: 'Dream House'}, {name: 'Loft'}],
            error: '',
            loading: true
        }

        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
    });

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn()
        });

        it('should dispatch addProject when handleSubmit is called', () => {
            const actionToDispatch = addProject({
                name: 'Dream House'
            });

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.addProject({
                name: 'Dream House'
            })

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should dispatch hasErrored when error occurs', () => {
            const actionToDispatch = hasErrored({
                error: 'Error posting project'
            });

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.hasErrored({
                error: 'Error posting project'
            });
            
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })
    })
})