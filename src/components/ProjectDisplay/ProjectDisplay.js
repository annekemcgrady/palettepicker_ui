import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchAllPalettes, deletePalette, deleteProject } from '../../utilz/apiCalls';
import { getProjects, getPalettes, hasErrored, loadComplete, removePalette, removeProject } from '../../actions';
import { connect } from 'react-redux';


export class ProjectDisplay extends React.Component {

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


    deletePalette = (id) => {
        this.props.deletePalette(id)
        deletePalette(id)
    }

    deleteProject = (id) => {
        this.props.deleteProject(id)
        deleteProject(id)
    }

    render() {  

        let projects = this.props.projects.map(project => {
            let projPalettes = this.props.palettes.filter(palette => palette.project_id===project.id)
            return { ...project, palettes: projPalettes}
        })

        const tiles = projects.map(project => {
            return (
                <ProjectTile 
                id ={project.id}
                key={project.created_at}
                name={project.name}
                palettes={project.palettes}
                deletePalette={this.deletePalette}
                deleteProject={this.deleteProject}
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

export const mapStateToProps = state => ({
    projects: state.projects,
    palettes: state.palettes,
    error: state.error,
    isLoading: state.loading
})

export const mapDispatchToProps = dispatch => ({
    getProjects: projects => dispatch(getProjects(projects)),
    getPalettes: palettes => dispatch(getPalettes(palettes)),
    deletePalette: id => dispatch(removePalette(id)),
    deleteProject: id => dispatch(removeProject(id)),
    hasErrored: error => dispatch(hasErrored(error)),
    loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);