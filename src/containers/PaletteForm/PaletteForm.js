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
        const newPalette = {...this.state}
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
                <label htmlFor='name'>Ready to save this palette?</label>
                <select name='project' value={this.state.project} onChange={this.handleChange}>
                    <option value=''>Select a Project</option>
                </select>
                <input 
                    type='text' 
                    name='name'
                    autoComplete='off' 
                    value={this.state.name} 
                    placeholder='Name it!' 
                    onChange={this.handleChange}/>
                <button onClick={e => this.handleSubmit(e)}>Save it!</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    palettes: state.palettes,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    addPalette: palette => dispatch(addPalette(palette)),
    hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);