import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects } from '../../utilz/apiCalls';
import { getProjects, hasErrored, loadComplete } from '../../actions';
import { connect } from 'react-redux';

class ProjectDisplay extends React.Component {
    componentDidMount() {
        fetchProjects()
        .then(projects => this.props.getProjects(projects))
        .then(this.props.loadComplete())
        .catch(error => this.props.hasErrored(error))

    }

    render() {  
        const tiles = this.props.projects.map(project => {
            return (
                <ProjectTile 
                key={Date.now()}
                name={project.name}
                />
                )
            })
            return (
                <section className='project-display'>
                    <ProjectForm />
                        {tiles}
                </section>
            )
  }
}

const mapStateToProps = state => ({
    projects: state.projects,
    error: state.error,
    isLoading: state.loading
})

const mapDispatchToProps = dispatch => ({
    getProjects: projects => dispatch(getProjects(projects)),
    hasErrored: error => dispatch(hasErrored(error)),
    loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);