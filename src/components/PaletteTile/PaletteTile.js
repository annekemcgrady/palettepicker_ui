import React from 'react';
import './PaletteTile.scss'
import locked from '../../images/locked.png'
import unlocked from '../../images/unlocked.png'


const PaletteTile = ({ isLocked, hexCode, id,lockColor}) => {

    let divStyle = {
        color: 'black',
        backgroundColor: `#${hexCode}`,
        height: '350px',
        width: '200px',
        transition: 'all 1.5s ease',
        border: '1px solid black'
    };

   
    return (
        <article className='palette-tile' style={divStyle}>
            <p className='hex-code'>#{hexCode}</p>

            <img alt='open padlock' type='button'src={isLocked ? locked : unlocked} height='20px' onClick={()=>lockColor(id)} />

        </article>
    )
}

export default PaletteTile;