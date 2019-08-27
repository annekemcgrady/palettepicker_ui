import React from 'react';
import './ProjectTile.scss'

const ProjectTile = ({name,id, palettes, deletePalette}) => {
    
    const projectPalettes = palettes.map(palette => {
      
        return (
            <article className='project-palette'>
                <p>{palette.name}</p>
                <div className='project-palette-div' style={{backgroundColor: palette.color_one}}></div>
                <div className='project-palette-div' style={{backgroundColor: palette.color_two}}></div>
                <div className='project-palette-div' style={{backgroundColor: palette.color_three}}></div>
                <div className='project-palette-div' style={{backgroundColor: palette.color_four}}></div>
                <div className='project-palette-div' style={{backgroundColor: palette.color_five}}></div>
                <button className='project-palette-delete' onClick={()=> deletePalette(palette.id)}>Delete</button>
            </article>
        )
    })

    return (
        <article className='project-tile'>
            <h2>Project: {name}</h2>
            {projectPalettes}
            <button>Delete Project</button>
        </article>
    )
}

export default ProjectTile;