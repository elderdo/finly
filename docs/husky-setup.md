# Setting Up Husky for a Node.js Project with Jest and Git

This guide explains how to set up Husky to manage Git hooks in a Node.js project that uses Jest for testing.

## What is Husky?

Husky is a tool that makes it easy to use Git hooks in your project. You can use it to run scripts (like tests or linters) automatically before commits or pushes.

## Installation

Install Husky as a development dependency:

```bash
npm install --save-dev husky
```

## Enable Git Hooks

To enable Git hooks in your project, run:

```bash
npx husky install
```

Add this to your `package.json` scripts to ensure hooks are set up after every install:

```json
{
  // ...existing package.json fields
  "scripts": {
    "prepare": "husky install"
  }
}
```

## Add a Pre-commit Hook to Run Jest

Create a pre-commit hook that runs your tests before allowing a commit:

```bash
npx husky add .husky/pre-commit "npm test"
```

This will prevent commits if your Jest tests fail.

## Example Workflow

1. Make changes to your code.
2. Stage your changes with `git add`.
3. Run `git commit`. Husky will automatically run `npm test` before the commit is finalized.
4. If tests pass, the commit proceeds. If not, the commit is aborted.

## Additional Tips

- You can add more hooks (e.g., `pre-push`, `commit-msg`) for other checks.
- Combine Husky with tools like lint-staged to run linters only on staged files.
- For more advanced configuration, see the [Husky documentation](https://typicode.github.io/husky/#/).

---

**References:**

- [Husky Official Documentation](https://typicode.github.io/husky/#/)
- [Jest Official Documentation](https://jestjs.io/docs/getting-started)
- [Git Hooks Documentation](https://git-scm.com/docs/githooks)
