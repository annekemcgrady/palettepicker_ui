import React from 'react';
import { connect } from 'react-redux';
import { addProject, hasErrored, getProjects } from '../../actions';
import { postProject, fetchProjects } from '../../utilz/apiCalls';
import './ProjectForm.scss';

export class ProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            error: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({error: ''})
    }

    handleSubmit = e => {
        e.preventDefault();
        let newProject = {name: this.state.name}

       const projectNameUsed = this.verifyUniqueName()

        if(projectNameUsed) {
            this.clearInputs()
            this.setState({error: 'This project name exists'})
        
        } else {
            postProject(newProject)
            .then(()=> fetchProjects())
            .then(projects => this.props.getProjects(projects))
            .catch(error => this.props.hasErrored(error))
            this.clearInputs()
                // console.log("ELSE")
  
            } 
    }

    verifyUniqueName = () => {
        const names = this.props.projects.map(project => {
            return project.name.toUpperCase()
        })
        return  names.includes(this.state.name.toUpperCase())
    }

    clearInputs = () => {
        this.setState({name: ''})
    }

    render() {
        return (
            <>
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
                {this.state.error && <p>{this.state.error}</p>}
                </>
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