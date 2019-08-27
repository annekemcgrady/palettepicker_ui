import React from 'react';
import './ProjectTile.scss'

const ProjectTile = ({name, palettes}) => {

    const projectPalettes = palettes.map(palette => {
        
        return (
            <article className='project-palette'>
                <p>{palette.name}</p>
                <div className='project-palette-div' backgroundColor={palette.color_one}></div>
                <div className='project-palette-div' backgroundColor={palette.color_two}></div>
                <div className='project-palette-div' backgroundColor={palette.color_three}></div>
                <div className='project-palette-div' backgroundColor={palette.color_four}></div>
                <div className='project-palette-div' backgroundColor={palette.color_five}></div>
                <button className='project-palette-delete'>Delete</button>
            </article>
        )
    })

    return (
        <article className='project-tile'>
            <h2>{name}</h2>
        </article>
    )
}

export default ProjectTile;