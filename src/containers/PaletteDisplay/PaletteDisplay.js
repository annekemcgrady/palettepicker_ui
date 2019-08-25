import React from 'react';
import { connect } from 'react-redux'
import PaletteTile from '../../components/PaletteTile/PaletteTile.js'
import './PaletteDisplay.scss';

export const PaletteDisplay = ({ currentColors }) => {

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

        </section>
    )
    
};

export const mapStateToProps = state => ({
    currentColors: state.colors
});

export default connect(mapStateToProps)(PaletteDisplay);