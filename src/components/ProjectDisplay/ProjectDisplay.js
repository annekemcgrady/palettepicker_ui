import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchPalettes } from '../../utilz/apiCalls';
import { getProjects, getPalettes, hasErrored, loadComplete } from '../../actions';
import { connect } from 'react-redux';


class ProjectDisplay extends React.Component {
    componentDidMount() {
        fetchProjects()
        .then(projects => this.props.getProjects(projects))
        .then(this.props.projects.map(project => {
            return fetchPalettes(project)
            .then(palettes => console.log(palettes))
        }))
        .then(this.props.loadComplete())
        .catch(error => this.props.hasErrored(error))

        // this.props.projects.map(project => {
        //     return fetchPalettes(project)
        //     .then(palettes => this.props.getPalettes(palettes))
        //     .catch(error => hasErrored(error))
        // })


    }

    render() {  
        const tiles = this.props.projects.map(project => {
            return (
                <ProjectTile 
                key={project.updated_at}
                name={project.name}
                />
                )
            })
            return (
                <section className='project-display'>
                    <h1 className='app-heading'>ColourRad</h1>
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
    getPalettes: palettes => dispatch(getPalettes(palettes)),
    hasErrored: error => dispatch(hasErrored(error)),
    loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);