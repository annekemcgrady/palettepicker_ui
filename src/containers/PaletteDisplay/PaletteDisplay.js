import React from 'react';
import { connect } from 'react-redux'
import PaletteTile from '../../components/PaletteTile/PaletteTile.js'
import './PaletteDisplay.scss';
import ColorScheme from 'color-scheme'

export const PaletteDisplay = ({ currentColors }) => {
let scheme = new ColorScheme;
scheme.from_hue(21)         // Start the scheme 
      .scheme('contrast')     // Use the 'triade' scheme, that is, colors
                            // selected from 3 points equidistant around
                            // the color wheel.
      .variation('hard');   

var colors = scheme.colors();
console.log(colors)

    const displaySwatches = currentColors.map(color => {
        return (
        <PaletteTile
            key={Date.now()}
            isLocked={false}
            hexCode={color.hexCode}
        />
        )
    })

    return (
        <section className='palette-display'>

            {displaySwatches }
        <button type='button' className='generate-new-palette'>Generate New Palette</button>
        </section>
    )
    
};

export const mapStateToProps = state => ({
    currentColors: state.colors
});

export default connect(mapStateToProps)(PaletteDisplay);