import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchAllPalettes } from '../../utilz/apiCalls';
import { getProjects, getPalettes, hasErrored, loadComplete } from '../../actions';
import { connect } from 'react-redux';


class ProjectDisplay extends React.Component {
    componentDidMount() {

        fetchProjects()

        .then(projects => this.props.getProjects(projects))
        .then(() => fetchAllPalettes())
        .then(palettes => this.props.getPalettes(palettes))
        .then(() => this.props.loadComplete())
        .catch(error => this.props.hasErrored(error))

    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.projects !== this.props.projects) {
    //         fetchProjects()
    //         .then(projects => this.props.getProjects(projects))
    //         .then(() => fetchAllPalettes())
    //         .then(palettes => this.props.getPalettes(palettes))
    //         .then(() => this.props.loadComplete())
    //         .catch(error => this.props.hasErrored(error))
    //     }
    // }

    render() {  

        let projects = this.props.projects.map(project => {
            let projPalettes = this.props.palettes.filter(palette => palette.project_id===project.id)
            return { ...project, palettes: projPalettes}
        })

        const tiles = projects.map(project => {
            return (
                <ProjectTile 
                key={project.created_at}
                name={project.name}
                palettes={project.palettes}
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
    palettes: state.palettes,
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