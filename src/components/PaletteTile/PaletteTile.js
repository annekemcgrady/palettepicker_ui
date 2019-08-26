import React from 'react';
import './PaletteTile.scss'

const PaletteTile = ({ isLocked, hexCode }) => {

    var divStyle = {
        color: 'black',
        backgroundColor: `#${hexCode}`,
        height: '350px',
        width: '300px',
        border: '1px solid black'
    };
    
    return (
        <article className='palette-tile' style={divStyle}>
            <p>#{hexCode}</p>

            <button type='button' className='lock-button'>Lock</button>
        </article>
    )
}

export default PaletteTile;