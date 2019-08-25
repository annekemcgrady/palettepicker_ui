import React from 'react';
import './PaletteTile.scss'

const PaletteTile = ({ isLocked, hexCode }) => {
    return (
        <article className='palette-tile'>
            <p>{hexCode}</p>


        </article>
    )
}

export default PaletteTile;