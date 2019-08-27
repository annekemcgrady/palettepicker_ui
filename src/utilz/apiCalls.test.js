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
        })
    })
})