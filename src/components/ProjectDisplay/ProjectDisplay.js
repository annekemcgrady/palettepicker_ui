import React from 'react';
import './ProjectDisplay.scss'
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import ProjectTile from '../ProjectTile/ProjectTile';
import { fetchProjects, fetchPalettes } from '../../utilz/apiCalls';
import { getProjects, hasErrored, loadComplete } from '../../actions';
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
        .then(projects=>this.setState({projects}))
        .then(projects => fetchPalettes(this.state.projects[0]))
        .then(palettes => this.setState({palettes: [...palettes]}))
        .then(projects => this.props.loadComplete())
        .catch(error => this.props.hasErrored(error))
    }




    render() {  
        console.log(this.state)
        //CHANGE THIS BACK TO THIS.PROPS.PROJECTS ONCE WE ARE SENDING TO REDUX STORE
        const tiles = this.state.projects.map(project => {
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