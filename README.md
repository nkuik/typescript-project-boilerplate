# TypeScript Project Boilerplate

A minimal, modern boilerplate for starting new TypeScript projects. Includes essential tooling like formatting, linting, testing, and automated dependency updates. Designed to be easily understood and modified, including by AI assistants.

## Features

- **TypeScript**: Configured for modern Node.js environments.
- **PNPM Workspaces**: Ready for monorepo setups.
- **Biome**: Integrated for fast formatting and linting.
- **Vitest**: Set up for unit testing.
- **Renovate**: Configured for automatic dependency updates via GitHub Actions.
- **GitHub Actions**: Basic CI workflow for building and testing.
- **Strict Type Checking**: Encourages robust code.

## Getting Started

1.  **Use this template**: Click the "Use this template" button on GitHub or clone the repository.
2.  **Install dependencies**:

```bash
    brew install mise
    mise activate
    corepack enable
```

3.  **Update `package.json`**: Change the `name`, `description`, `author`, and other relevant fields for your new project.
4.  **Start coding**: Write your code in the `src` directory. The entry point is `src/index.ts`.
5.  **Run tests**:

```bash
    pnpm test
```

## Available Scripts

- `pnpm format`: Formats code using Biome.
- `pnpm biome:fix`: Lints and fixes code using Biome.
- `pnpm biome:fix-unsafe`: Lints and fixes code using Biome (including potentially unsafe fixes).
- `pnpm check:ci`: Runs Biome in CI mode (checks formatting and linting).
- `pnpm check:types`: Performs static type checking using TypeScript.
- `pnpm check`: Runs all `check:*` scripts.
- `pnpm build`: Compiles TypeScript code (add build configuration if needed).
- `pnpm test`: Runs tests using Vitest.
## Contributing

Pull requests are welcome. Please open an issue first to discuss what you would like to change.
