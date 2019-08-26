import React from 'react';
import './ProjectForm.scss';

class ProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <form className='save-project-form'>
                <input type='text' name='name' value={this.state.name} placeholder='Name Your Project!'/>                
            </form>
        )
    }
}

export default ProjectForm;