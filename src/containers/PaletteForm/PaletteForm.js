import React from 'react';
import { connect } from 'react-redux';
import { postPalette } from '../../utilz/apiCalls';
import { addPalette, hasErrored } from '../../actions'
import './PaletteForm.scss';

class PaletteForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            project: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }  
    
    handleSubmit = e => {
        e.preventDefault();
        const newPalette = {...this.state.name, 
            color_one: this.props.colors[0], 
            color_two: this.props.colors[1], 
            color_three: this.props.colors[2], 
            color_four: this.props.colors[3], 
            color_five: this.props.colors[4] 
        }
        console.log(newPalette)
        postPalette(newPalette)
        .then(palette => this.props.addPalette(palette))
        .catch(error => this.props.hasErrored(error))
        
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ name: '' })
    }

    render() {
        return (
            <form className='save-palette-form'>
                <label htmlFor='name' className='palette-form-label'>Ready to save this palette?</label>
                <select name='project' value={this.state.project} onChange={this.handleChange}>
                    <option value=''>Select a Project</option>
                    <option value='project-one'>Project 1</option>
                </select>
                <input 
                    className='palette-form-input'
                    type='text' 
                    name='name'
                    autoComplete='off' 
                    value={this.state.name} 
                    placeholder='Name it!' 
                    onChange={this.handleChange}/>
                <button className='palette-form-btn' onClick={e => this.handleSubmit(e)}>Save it!</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    palettes: state.palettes,
    colors: state.colors,
    projects: state.projects,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    addPalette: palette => dispatch(addPalette(palette)),
    hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);