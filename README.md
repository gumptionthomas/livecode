# Livecode Collection for Strudel

A repository of livecode patterns and examples to be used with [Strudel](https://strudel.cc/), a web-based live coding environment for music.

## What is Strudel?

Strudel is a JavaScript port of TidalCycles, bringing the power of pattern-based live coding to the browser. It allows you to create music by writing code that describes patterns of sounds.

## How to Use

You can use these patterns directly in the [Strudel REPL](https://strudel.cc/) or import them into your own Strudel projects.

### Using in Strudel REPL

1. Visit [https://strudel.cc/](https://strudel.cc/)
2. Copy any pattern from the `patterns/` directory
3. Paste it into the editor
4. Press Play to hear the pattern

### Importing Patterns

You can import patterns from this repository using:

```javascript
// Import a pattern from GitHub
await import('https://raw.githubusercontent.com/gumptionthomas/livecode/main/patterns/example.js')
```

## Repository Structure

```
patterns/          # Individual pattern files
  ├── basic/       # Basic rhythm and melody patterns
  ├── drums/       # Drum patterns
  ├── melodies/    # Melodic patterns
  └── effects/     # Effect and processing examples
```

## Contributing

Feel free to add your own patterns! Each pattern should:
- Be a valid Strudel/JavaScript file
- Include comments explaining what it does
- Be properly formatted and easy to understand

## Resources

- [Strudel Website](https://strudel.cc/)
- [Strudel Documentation](https://strudel.cc/learn/)
- [Strudel GitHub](https://github.com/tidalcycles/strudel)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.