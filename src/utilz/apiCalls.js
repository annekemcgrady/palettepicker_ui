export const fetchProjects = async () => {
    try {
        const url = `http://localhost:3000/api/v1/projects`
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

export const fetchPalettes = async () => {
    try {
        const url = `http://localhost:3000/api/v1/palettes`
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

export const postProject = async () => {
    
}