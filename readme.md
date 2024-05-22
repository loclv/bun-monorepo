# Bun monorepo

This a demo of a monorepo using [bun](https://bun.sh/) workspace.

## 🏕️ What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `backend`: [Elysia.js](https://elysiajs.com/) app
- `web`: [Next.js](https://nextjs.org/) app
- `mobile`:  React Native [Expo](https://expo.dev/) + expo-router
- `backend-api`: [Eden](https://elysiajs.com/eden/overview.html) a shared end-to-end type safety package.

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome.js](https://biomejs.dev/) for code formatting and linting. It is recommended to install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## 🌱 Getting Started

To install and start developing all apps, run the following command:

```sh
# upgrade bun version
bun upgrade

bun i
bun dev
```

For more information, see the `package.json` file.

DB migration:

```bash
bun gen
bun migrate
bun seed
```

Tested with Bun `1.1.8`.

## 🌳 Others scripts

```sh
# type check all packages
bun typecheck

# format all packages
bun format

# lint all packages
bun lint

```

### npm-check-updates

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.

`-ws` flag means that `Run on all workspaces. Add --root to also upgrade the root project.`.

```sh
bunx npm-check-updates -i -ws
```

If you see a error below, please try upgrading your Node.js version to the latest version.

```txt
internal/modules/cjs/loader.js:888
  throw err;
  ^

Error: Cannot find module 'node:path'
```
