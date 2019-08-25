import React from 'react';
import { connect } from 'react-redux';
import { postPalette } from '../../utilz/apiCalls';
import { addPalette, hasErrored } from '../../actions'
import './PaletteForm.scss';

class PaletteForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
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
                <input type='text' name='name' value={this.state.name} placeholder='Name Your Palette!' onChange={this.handleChange}/>
                <button onClick={e => this.handleSubmit(e)}>Save</button>
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