import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColors } from '../../actions';
import PaletteTile from '../../components/PaletteTile/PaletteTile.js';
import PaletteForm from '../PaletteForm/PaletteForm';
import './PaletteDisplay.scss';
import ColorScheme from 'color-scheme';

export class PaletteDisplay extends Component {
    constructor() {
        super();
        this.state = {
            colors: []
        }
    }

generateColors = () => {
let randomHue = Math.floor(Math.random())
let scheme = new ColorScheme();
    scheme.from_hue(randomHue)         // Start the scheme 
      .scheme('contrast')     // Use the 'triade' scheme, that is, colors
                            // selected from 3 points equidistant around
                            // the color wheel.
      .variation('hard');   

var colors = scheme.colors();
console.log(colors)
this.setState({colors})
this.props.setCurrentColors(this.state.colors)
}

render = () => {
    const displaySwatches = this.props.currentColors.map(color => {
        return (
        <PaletteTile
            key={Date.now()}
            isLocked={false}
            hexCode={color.hexCode}
            style={{backgroundColor: color}}
        />
        )
    })

    return (
        <main className='main'>
        <section className='palette-display'>
            {displaySwatches }
        </section>
        <button type='button' className='generate-new-palette' onClick={this.generateColors}>Generate New Palette</button>
        <PaletteForm />
        </main>
    )
}
    
};

export const mapStateToProps = state => ({
    currentColors: state.colors
});

export const mapDispatchToProps = dispatch => ({
    setCurrentColors: newColors => dispatch(getColors(newColors))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteDisplay);