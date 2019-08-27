const path = process.env.REACT_APP_BACKEND_URL

export const fetchProjects = async () => {
    try {
        const url = `${path}/projects`
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Projects failed to fetch');
        }
        const projects = await response.json();
        return projects;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const fetchPalettes = async project => {
    try {
        const { id } = project;
        const url = `${path}/projects/${id}/palettes`
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('Palettes failed to fetch')
        }
        const palettes = await response.json();
        console.log(palettes)
        return palettes;
    } catch ({ message }) {
        throw new Error(message)
    }
}


export const fetchAllPalettes = async () => {
    try {
        const url = `${path}/palettes`
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('Palettes failed to fetch')
        }
        const palettes = await response.json();
        return palettes;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const postProject = async (project) => {
    try {
        const url = `${path}/projects`
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project)
        }

        const response = await fetch(url, options) 
        const addedProject = response.json();

        return addedProject;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const postPalette = async (palette) => {
    try {
        const url = `${path}/palettes`
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(palette)
        }
        const response = await fetch(url, options)
        console.log(response)
        const addedPalette = response.json()

        return addedPalette;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const patchProject = async (project) => {
    try {
        const url = `${path}/projects/${project.id}`
        const options = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project)
        }

        const response = await fetch(url, options)
        const editedProject = response.json()

        return editedProject;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const patchPalette = async (palette) => {
    try {
        const url = `${path}/palettes/${palette.id}`
        const options = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(palette)
        }

        const response = await fetch(url, options)
        const editedPalette = response.json();

        return editedPalette;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const deleteProject = async (id) => {
    const options = {
        method: 'DELETE'}

    try {
        const url = `${path}/projects/${id}`
        const response = await fetch(url, options)

        return response;
    } catch ({ message }) {
        throw new Error(message)
    }
}

export const deletePalette = async (id) => {
    const options = {
        method: 'DELETE'}

    try {
        const url = `${path}/palettes/${id}`
        const response = await fetch(url, options)

        return response;
    } catch ({ message }) {
        throw new Error(message)
    }
}

