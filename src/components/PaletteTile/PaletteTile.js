import React from 'react';
import './PaletteTile.scss'

const PaletteTile = ({ isLocked, hexCode }) => {

    var divStyle = {
        color: 'white',
        backgroundColor: `#${hexCode}`,
        height: '300px',
        width: '200px',
        border: '1px solid black'
    };
    
    return (
        <article className='palette-tile' style={divStyle}>
            <p>#{hexCode}</p>


        </article>
    )
}

export default PaletteTile;