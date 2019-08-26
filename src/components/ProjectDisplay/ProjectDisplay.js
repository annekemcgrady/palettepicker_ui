import React from 'react';
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects } from '../../utilz/apiCalls';
import { getProjects, hasErrored, loadComplete } from '../../actions';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../containers/PaletteDisplay/PaletteDisplay';

const ProjectDisplay = (props) => {
    const projects = fetchProjects()
    .then(projects => props.getProjects(projects))
    .catch(error => props.hasErrored(error))
    return (
        <section className='project-display'>
            <ProjectForm />
        </section>
    )
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