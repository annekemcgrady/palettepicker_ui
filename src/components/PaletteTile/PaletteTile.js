import React from 'react';
import './PaletteTile.scss'
import locked from '../../images/locked.png'
import unlocked from '../../images/unlocked.png'


const PaletteTile = ({ isLocked, hexCode, id }) => {

    let divStyle = {
        color: 'black',
        backgroundColor: `#${hexCode}`,
        height: '350px',
        width: '290px',
        border: '1px solid black'
    };

   
    return (
        <article className='palette-tile' style={divStyle}>
            <p className='hex-code'>#{hexCode}</p>
            <img type='button' src={unlocked} height='20px'/>
        </article>
    )
}

export default PaletteTile;