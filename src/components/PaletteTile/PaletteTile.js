import React from 'react';
import './PaletteTile.scss'
import locked from '../../images/locked.png'
import unlocked from '../../images/unlocked.png'


const PaletteTile = ({ isLocked, hexCode, id,lockColor}) => {

    let divStyle = {
        color: 'black',
        backgroundColor: `#${hexCode}`,
        height: '300px',
        width: '200',
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