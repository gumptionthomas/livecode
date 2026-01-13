# Contributing to Livecode Collection

Thank you for your interest in contributing to this Strudel livecode collection! 

## How to Contribute

### Adding New Patterns

1. **Fork the repository** and create a new branch for your pattern
2. **Choose the right category** for your pattern:
   - `patterns/basic/` - Simple, beginner-friendly patterns
   - `patterns/drums/` - Drum and percussion patterns
   - `patterns/melodies/` - Melodic and harmonic patterns
   - `patterns/effects/` - Effect processing and sound design examples

3. **Create your pattern file** (`.js` extension)
   - Use a descriptive filename (e.g., `dubstep-wobble.js`)
   - Start with a comment explaining what the pattern does
   - Make sure the code is valid Strudel/JavaScript

4. **Test your pattern** in [Strudel REPL](https://strudel.cc/)
   - Ensure it runs without errors
   - Check that it sounds good
   - Verify all functions work as expected

5. **Update the documentation**
   - Add your pattern to `patterns/README.md`
   - Include a brief description
   - Add usage examples if helpful

6. **Submit a Pull Request**
   - Write a clear description of your pattern
   - Explain any unique techniques or features
   - Reference any issues if applicable

### Pattern Guidelines

**Good patterns should:**
- Be well-commented and easy to understand
- Use clear, descriptive variable names if any
- Be self-contained (work on their own)
- Demonstrate a specific technique or style
- Be properly formatted and readable

**Example of a well-formatted pattern:**

```javascript
// Jazz Waltz Pattern
// A 3/4 time signature pattern with swing feel

sound("bd ~ ~ sd ~ ~ bd ~ ~")
  .bank("RolandTR808")
  .gain(0.7)
  .room(0.4)
```

### Reporting Issues

If you find a pattern that doesn't work or could be improved:
1. Open an issue on GitHub
2. Describe the problem clearly
3. Include the pattern name and file
4. Suggest a fix if possible

### Code of Conduct

- Be respectful and welcoming to all contributors
- Provide constructive feedback
- Focus on the code and patterns, not the person
- Help others learn and improve

### Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Ask in the [Strudel Discord](https://discord.gg/tedAmq8bYQ)
- Check the [Strudel documentation](https://strudel.cc/learn/)

Thank you for helping make this collection better! 🎵
