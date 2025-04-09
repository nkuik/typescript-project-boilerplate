# AI Development Guide

This project is optimized for AI-assisted development. Follow these guidelines to get the most out of AI coding assistants like GitHub Copilot, ChatGPT, and aidr.

## Effective Prompting

When working with AI tools, use these patterns:

- **Be specific about file locations**: "Add a function to src/utils/formatting.ts that..."
- **Reference existing types**: "Create a component that accepts props of type UserConfig from src/types"
- **Provide context**: "This project uses Biome for formatting and follows these conventions..."

## Project Structure

The project follows a predictable structure to help AI tools understand the codebase:

- `src/types/` - Type definitions
- `src/utils/` - Utility functions
- `src/lib/` - Core functionality
- `src/config/` - Configuration

## Common Tasks

Here are examples of effective prompts for common tasks:

### Adding a new utility function

```
Add a utility function to src/utils/string-utils.ts that converts camelCase to kebab-case
```

### Creating a new type

```
Create a type definition in src/types/api.ts for an API response that includes pagination
```

### Implementing a feature

```
Implement a feature in src/lib/auth.ts that validates a JWT token
```
