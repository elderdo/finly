# Tailwind CSS v4 Setup & Usage Guide

Tailwind CSS v4 introduces a much simpler and more streamlined workflow compared to previous versions. This guide explains how to set up and use Tailwind v4, especially if you're following older tutorials or upgrading from earlier versions.

## 1. Installation

**You only need two packages:**

**Example for Vite projects:**

```bash
npm install tailwindcss @tailwindcss/vite
```

**You only need two packages:**
- `tailwindcss` (the core library)
- A build plugin: `@tailwindcss/vite` (for Vite) or `@tailwindcss/postcss` (for PostCSS)

**Project file setup:**

1. Create a folder named `public/styles/` in your project root (if it doesn't exist).
2. Inside `public/styles/`, create a file named `tailwind.css`.
3. In `tailwind.css`, add the following line:

  ```css
  @import "tailwindcss";
  ```

This will include all Tailwind base, components, and utilities.

**Install Tailwind and CLI plugin:**

```bash
npm install tailwindcss @tailwindcss/cli
```

## 2. Adapting Old Tutorials

| If the tutorial says... | Do this in v4... |
| ------------------------ | ------------------ |
| Create a `tailwind.config.js` | Skip it. Use the `@theme` block in your CSS for configuration. |
| Install `autoprefixer` | Skip it. Tailwind v4 uses Lightning CSS for vendor prefixing. |
| Add `@tailwind` directives | Use a single line: `@import "tailwindcss";` in your CSS. |
| List your content paths | Skip it. Tailwind v4 auto-detects your template files. |

## 3. Customization

**Modern way:**

Add custom colors, fonts, etc., directly in your CSS using the `@theme` block:

```css
@import "tailwindcss";
@theme {
  --color-brand: #3b82f6;
}
```

**Compatibility way:**

If you need to use an old `tailwind.config.js`, link it in your CSS:

```css
@import "tailwindcss";
@config "./tailwind.config.js";
```

## 4. Building Your CSS

**Old way:** Using `postcss-cli`.

**New way:** Add a script to your `package.json` to build your Tailwind CSS:

```json
"scripts": {
  // ...other scripts
  "dev:css": "npx @tailwindcss/cli -i ./public/styles/tailwind.css -o ./public/styles/output.css --watch"
}
```

Then, during development, run the following command in a separate terminal:

```bash
npm run dev:css
```

This will watch your `tailwind.css` file and generate/update `output.css` automatically as you develop. Make sure your HTML references `/styles/output.css` so Tailwind styles are applied.

## 5. Upgrading Existing Projects

If you're updating an old project, run:

```bash
npx @tailwindcss/upgrade
```

This will help convert your old configuration to the new v4 format.

## Summary

- Tailwind v4 is simpler: fewer dependencies, less configuration.
- Most old steps are now automatic or handled directly in your CSS.
- Use the CLI for building, and enjoy faster, easier styling!

For more details, see the [official Tailwind CSS documentation](https://tailwindcss.com/docs/installation).
