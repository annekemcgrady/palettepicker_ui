import React from 'react';
import './PaletteForm.scss';

class PaletteForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            color_one: '',
            color_two: '',
            color_three: '',
            color_four: '',
            color_five: ''
        }
    }
    
    render() {
        return (
            <form>
                <input type='text' name='name' value={this.state.name} placeholder='Name Your Palette!'/>
            </form>
        )
    }
}

export default PaletteForm;