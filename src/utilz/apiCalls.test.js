import {
    fetchProjects,
    fetchPalettes,
    postProject,
    postPalette,
    patchProject,
    patchPalette,
    deleteProject,
    deletePalette,
    fetchAllPalettes
} from './apiCalls';

describe('apiCalls', () => {
    describe('fetchProjects', () => {
        let mockProjects;

        beforeEach(() => {
            mockProjects = [
                {name: 'Bathroom'},
                {name: 'Rec Room'}
            ];

            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockProjects)
                })
            })
        });

        it('should be called with the correct URL', () => {
            const expected = `http://localhost:3000/api/v1/projects`
            
            fetchProjects();

            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('HAPPY: should return the array of current projects', async () => {
            const result = await fetchProjects()

            expect(result).toEqual(mockProjects)
        });

        it('SAD: should throw an error if unable to fetch', () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.reject({
                  message: 'Sorry. Unable to retrieve projects.'
                });
              });
              expect(fetchProjects()).rejects.toEqual(
                Error('Sorry. Unable to retrieve projects.')
              );
        });
    });

    describe('fetchPalettes', () => {
        let mockPalettes; 
        let mockId;
        let mockProject;

        beforeEach(() => {
            mockPalettes = [
                {name: 'Yeller', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                {name: 'Green Machine', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                {name: 'Purple Power', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'}
            ];

            mockId = 14;

            mockProject = {
                name: 'Living Room',
                id: 2,
                palettes: [
                    {name: 'Yeller', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                    {name: 'Green Machine', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                    {name: 'Purple Power', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'}
                ]
            }

            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockPalettes)
                })
            })
        })

        it('should call fetch with correct url', async () => {
            const expected = `http://localhost:3000/api/v1/projects/${mockProject.id}/palettes`;

            await fetchPalettes(mockProject)
        
            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('HAPPY: should return an array of palettes', async () => {
            const result = await fetchPalettes(mockProject);

            expect(result).toEqual(mockPalettes)
        });

        it('SAD: should throw an error if status is not ok', () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.reject({
                    message: `Cannot read property 'id' of undefined`
                })
            })

            expect(fetchPalettes()).rejects.toEqual(
                Error(`Cannot read property 'id' of undefined`)
            )
        })
    });

    describe('fetchAllPalettes', () => {
        let mockPalettes;

        beforeEach(() => {
            mockPalettes = [
                {name: 'Yeller', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                {name: 'Green Machine', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'},
                {name: 'Purple Power', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'}
            ];

            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockPalettes)
                })
            });
        });

        it('should call fetch with correct url', async () => {
            const expected = 'http://localhost:3000/api/v1/palettes';

            await fetchAllPalettes();

            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('HAPPY: hould return an array of palettes', async () => {
            const result = await fetchAllPalettes();

            expect(result).toEqual(mockPalettes)
        });

        it('SAD: should throw an error if status not ok', () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve({
                    error: 'Palettes failed to fetch'
                })
            })
            
            expect(fetchAllPalettes()).rejects.toEqual(
                Error('Palettes failed to fetch')
            )
        })
    })

    describe('postProject', () => {
        let mockResponse;
        let mockProject;

        beforeEach(() => {
            mockResponse = 7;
            mockProject =  { name:'Living Room'}
            
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                })
            })
        });

        it('should call fetch with correct parameters', () => {
            const expected = [
                `http://localhost:3000/api/v1/projects`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(mockProject)
                }
            ]

            postProject(mockProject);

            expect(window.fetch).toHaveBeenCalledWith(...expected)
        });

        it('HAPPY: should return the added project id', async() => {
            const result = await postProject()

            expect(result).toEqual(mockResponse)
        });

        it('SAD: should throw an error if status is not ok', () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve({
                    error: 'Unable to post project'
                })
            })

            expect(postProject()).rejects.toEqual(
                Error('Unable to post project')
            )
        });
    });

    describe('postPalette', () => {
        let mockResponse;
        let mockPalette;

        beforeEach(() => {
            mockResponse = 7;
            mockPalette =  {name: 'Yeller', color_one: '#bfe9d4', color_two:'#5f9ee5', color_three: '#f28e98', color_four:'#4740b7', color_five: '#7939da'}
            
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                })
            })
        });

        it('should call fetch with correct parameters', () => {
            const expected = [
                `http://localhost:3000/api/v1/palettes`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(mockPalette)
                }
            ]

            postPalette(mockPalette);

            expect(window.fetch).toHaveBeenCalledWith(...expected)
        });

        it('HAPPY: should return the added project id', async() => {
            const result = await postPalette()

            expect(result).toEqual(mockResponse)
        });

        it('SAD: should throw an error if status is not ok', () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve({
                    error: 'Unable to post palette'
                })
            })

            expect(postPalette()).rejects.toEqual(
                Error('Unable to post palette')
            )
        });
    })
})