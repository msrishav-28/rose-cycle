# Contributing Guidelines

Thank you for your interest in contributing to RoseCycle. The following guidelines structure the contribution process.

## Branching Strategy

- `main` serves as the primary, stable branch.
- Feature branches should be created from `main`.
- Branch naming convention: `feature/brief-description`, `bugfix/issue-description`, or `chore/task-name`.

## Making Changes

1. **Create a branch** for your work.
2. **Implement your changes**, ensuring code quality and adherence to existing style patterns.
3. **Run the linter** (`npm run lint`) to ensure no formatting or static analysis errors are introduced.
4. **Commit your changes**. Commit messages should be clear, concise, and descriptive of the modifications.

### Coding Standards

- Prefer functional components and React Hooks.
- Ensure all new components use Tailwind CSS for styling unless absolutely necessary.
- Avoid introducing inline styles.
- Add meaningful comments only where the codebase logic is particularly complex; otherwise, prefer self-documenting code through clear variable and function naming.

## Pull Requests

1. Push your branch to the repository.
2. Open a Pull Request (PR) against the `main` branch.
3. Detail the changes made, the problem solved, and any necessary testing instructions in the PR description.
4. Address any feedback provided during the code review process.
