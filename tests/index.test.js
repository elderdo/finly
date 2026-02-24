const request = require('supertest');
const server = require('../src/index');

// `describe` groups related tests together.
// Here, all tests are checking the routes from our Node.js server.
describe('Barebones Node.js Routing', () => {

    // This test sends a GET request to the home route (`/`).
    // We expect:
    // 1) status code 200 (success)
    // 2) response text to contain a <title>Document</title> from the partials directory
    test('GET / should return an html title of "Document"', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('<title>Document</title>');
    });

    // This test sends a GET request to the home route (`/`).
    // We expect:
    // 1) status code 200 (success)
    // 2) response text to match the home page message
    test('GET / should return Hello message', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('<title>Document</title>');
        expect(res.text).toMatch(/Hello From Node\.js/);
    });

    // This test checks the `/contact` route.
    // It should return a successful status and the contact page text.
    test('GET /contact should return Contact Page', async () => {
        const res = await request(server).get('/contact');
        expect(res.statusCode).toBe(200);
        expect(res.text).toMatch(/The Contact Page/);
    });

    // This test checks the `/about` route.
    // Just like above, we verify both status and response body.
    test('GET /about should return About Page', async () => {
        const res = await request(server).get('/about');
        expect(res.statusCode).toBe(200);
        expect(res.text).toMatch(/The About Page/);
    });

    // This test checks what happens when a route does not exist.
    // `/unknown` is not defined, so the server should return:
    // 1) status code 404 (not found)
    // 2) text "Not Found"
    test('GET /invalid-route should return 404', async () => {
        const res = await request(server).get('/unknown');
        expect(res.statusCode).toBe(404);
        expect(res.text).toMatch(/Not Found/);
    });
});

