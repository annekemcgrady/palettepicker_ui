import React from 'react';
import { connect } from 'react-redux';
import { addProject, hasErrored, getProjects } from '../../actions';
import { postProject, fetchProjects } from '../../utilz/apiCalls';
import './ProjectForm.scss';

export class ProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const newProject = {...this.state}
        postProject(newProject)
        .then(()=> fetchProjects())
        .then(projects => this.props.getProjects(projects))
        .catch(error => this.props.hasErrored(error))
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name: ''})
    }

    render() {
        return (
            <form className='save-project-form'>
                <input 
                    type='text' 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    className='project-form-input'
                    placeholder='Name Your Project!'
                    autoComplete="off"
                /> 
                <button className='project-form-btn' onClick={e => this.handleSubmit(e)}>Add Project</button>               
            </form>
        )
    }
}

export const mapStateToProps = state => ({
    projects: state.projects,
    error: state.error,
    loading: state.loading
});

export const mapDispatchToProps = dispatch => ({
    addProject: project => dispatch(addProject(project)),
    getProjects: projects => dispatch(getProjects(projects)),
    hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);