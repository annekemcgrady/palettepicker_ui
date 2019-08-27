import {
    fetchProjects,
    fetchPalettes,
    postProject,
    postPalette,
    patchProject,
    patchPalette,
    deleteProject,
    deletePalette
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

    describe.skip('fetchPalettes', () => {
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
                    json: Promise.resolve(mockPalettes)
                })
            })
        })

        it('should call fetch with correct url', async () => {
            const expected = `http://localhost:3000/api/v1/projects/${mockProject.id}/palettes`;

            fetchProjects()
            await fetchPalettes(mockProject)
        
            expect(window.fetch).toHaveBeenCalledWith(expected)
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
                    json: Promise.resolve(mockResponse)
                })
            })
        });

        it.skip('should call fetch with correct parameters', () => {
            const expected = [
                `http://localhost:3000/api/v1/projects`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: mockProject
                }
            ]

            postProject(mockProject);

            expect(window.fetch).toHaveBeenCalledWith(...expected)
        })
    })
})