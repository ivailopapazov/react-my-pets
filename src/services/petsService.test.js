import * as petsService from './petsService';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('http://localhost:5000/pets', (req, res, ctx) => {
        return res(ctx.json([{likes: '10'}]))
    }),
);

beforeAll(() => {
    server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Pet service', () => {
    it('Should convert likes to numbers when received', (done) => {
        petsService.getAll()    
            .then(result => {
                console.log(result);
                expect(typeof(result[0].likes)).toBe('number');
                done();
            });
    });
});