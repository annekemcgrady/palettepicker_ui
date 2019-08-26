import React from 'react';
import './ProjectTile.scss'

const ProjectTile = ({name}) => {
    return (
        <article>
            <h2>{name}</h2>
        </article>
    )
}

export default ProjectTile;