# Setting Up Jest for a Node.js Project

This guide explains how to set up Jest, a popular JavaScript testing framework, in your Node.js project.

## Installation

To install Jest as a development dependency, run:

```bash
npm install --save-dev jest
```

If you want to use Babel or TypeScript, you may need additional setup. For most Node.js projects, the above command is sufficient.

## Basic Configuration

Add a `test` script to your `package.json` so you can run tests easily:

```json
{
  // ...existing package.json fields
  "scripts": {
    "test": "jest"
  }
}
```

You can also create a Jest configuration file for more advanced options. The most common is `jest.config.js`:

```js
module.exports = {
  testEnvironment: 'node',
  // Add more configuration options as needed
};
```

## Writing Tests

- Place your test files in a `tests` directory or next to the files they test.
- Name your test files with `.test.js` or `.spec.js` (e.g., `index.test.js`).
- Write your tests using Jest's `test` or `it` functions and assertions like `expect`.

Example:

```js
// tests/example.test.js
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Running Tests

To run your tests, use:

```bash
npm test
```

Or directly:

```bash
npx jest
```

## Additional Tips

- For code coverage, run `npm test -- --coverage`.
- To watch files and re-run tests on changes, use `npm test -- --watch`.
- For more configuration options, see the [Jest documentation](https://jestjs.io/docs/configuration).

---

**References:**

- [Jest Official Documentation](https://jestjs.io/docs/getting-started)
- [Node.js Testing Guide](https://nodejs.dev/en/learn/unit-testing-in-nodejs/)
