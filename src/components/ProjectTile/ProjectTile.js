import React from 'react';
import './ProjectTile.scss'

const ProjectTile = ({ name,id, palettes, deletePalette, deleteProject, setPalette}) => {
    
    const projectPalettes = palettes.map(palette => {
      
        return (
            <article key={Date.now()} onClick={()=>setPalette(palette)} className='project-palette'>
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
            <button className='project-delete' onClick={()=> deleteProject(id)}>Delete Project</button>
        </article>
    )
}

export default ProjectTile;