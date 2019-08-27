import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchPalettes } from '../../utilz/apiCalls';
import { getProjects, hasErrored, loadComplete, getPalettes } from '../../actions';
import { connect } from 'react-redux';


class ProjectDisplay extends React.Component {
    constructor(){
        super()
        this.state = {
            projects: [],
            palettes:[]
        }
    }

    componentDidMount() {

        fetchProjects()
        .then(projects => this.setState({projects}))
        .then(projects => this.getPalettesByProject(this.state.projects))
        .then(palettes => this.setState({palettes: [...palettes]}))
        .then(projects => this.props.loadComplete())
        .catch(error => this.props.hasErrored(error))
    }

    getPalettesByProject = (projects) => {
        console.log('firing')
        let foundPalettes =[];
        projects.forEach(project => {
        foundPalettes.push(fetchPalettes(project))
        })
        return Promise.all(foundPalettes)
    }

    render() {  
        console.log(this.state.palettes)
        //CHANGE THIS BACK TO THIS.PROPS.PROJECTS ONCE WE ARE SENDING TO REDUX STORE
        let projects = this.state.projects.map(project => {
            let projPalettes = this.state.palettes.flat().filter(palette => palette.project_id===project.id)
            return { ...project, palettes: projPalettes}
        })

        const tiles = projects.map(project => {
            return (
                <ProjectTile 
                key={project.updated_at}
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
    error: state.error,
    isLoading: state.loading
})

const mapDispatchToProps = dispatch => ({
    getProjects: projects => dispatch(getProjects(projects)),
    hasErrored: error => dispatch(hasErrored(error)),
    loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDisplay);