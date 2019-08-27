import React from 'react';
import './ProjectTile.scss'

const ProjectTile = ({name, palettes}) => {

    const projectPalettes = palettes.map(palette => {
        console.log(palette)
      
        return (
            <article className='project-palette'>
                <p>Name: {palette.name}</p>
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
            <h2>Project: {name}</h2>
            {projectPalettes}
        </article>
    )
}

export default ProjectTile;