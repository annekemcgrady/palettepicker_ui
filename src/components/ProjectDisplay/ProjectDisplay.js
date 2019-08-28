import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchAllPalettes, deletePalette, deleteProject } from '../../utilz/apiCalls';
import { getProjects, getPalettes, hasErrored, loadComplete, removePalette, removeProject, getColors } from '../../actions';
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


    deletePalette = (id) => {
        this.props.removePalette(id)
        deletePalette(id)
    }

    deleteProject = (id) => {
        this.props.removeProject(id)
        deleteProject(id)
    }

    setPalette = (palette) => {
        let {color_one, color_two, color_three, color_four, color_five} = palette
        this.props.getColors([{hexCode: color_one}, {hexCode: color_two}, {hexCode: color_three}, {hexCode: color_four}, {hexCode: color_five}])
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
                    key={project.name}
                    name={project.name}
                    palettes={project.palettes}
                    deletePalette={this.deletePalette}
                    deleteProject={this.deleteProject}
                    setPalette={this.setPalette}
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
    loading: state.loading
})

export const mapDispatchToProps = dispatch => ({
    getProjects: projects => dispatch(getProjects(projects)),
    getPalettes: palettes => dispatch(getPalettes(palettes)),
    removePalette: id => dispatch(removePalette(id)),
    removeProject: id => dispatch(removeProject(id)),
    getColors: colors => dispatch(getColors(colors)),
    hasErrored: error => dispatch(hasErrored(error)),
    loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);