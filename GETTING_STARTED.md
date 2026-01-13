# Getting Started with Strudel Livecode

This guide will help you start using the patterns in this repository with Strudel.

## What You'll Need

- A web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection
- Optional: Basic JavaScript knowledge (helpful but not required)

## Quick Start

### Option 1: Use the Strudel REPL Online

1. Open your web browser and go to [https://strudel.cc/](https://strudel.cc/)
2. Browse the patterns in this repository
3. Copy the code from any `.js` file
4. Paste it into the Strudel editor
5. Click the "Play" button (or press Ctrl+Enter / Cmd+Enter)
6. Enjoy the music!

### Option 2: Load Patterns Directly from GitHub

In the Strudel REPL, you can import patterns directly:

```javascript
// Load a pattern from this repository
await import('https://raw.githubusercontent.com/gumptionthomas/livecode/main/patterns/basic/simple-beat.js')
```

## Understanding the Basics

### Sound Patterns

The most basic pattern uses the `sound()` function:

```javascript
sound("bd sd")  // Plays kick drum (bd) then snare drum (sd)
```

### Pattern Notation

- `"bd sd"` - Sequential sounds (kick then snare)
- `"bd*4"` - Repeat sound (4 kicks)
- `"bd sd, hh*8"` - Layer patterns (stack them)
- `"bd [sd cp]"` - Subdivide time (snare and clap in half the time)
- `"<bd sd hh cp>"` - Alternate between options each cycle

### Common Functions

- `.bank("RolandTR909")` - Choose a sound bank
- `.gain(0.5)` - Adjust volume (0 to 1)
- `.fast(2)` - Speed up by 2x
- `.slow(2)` - Slow down by 2x
- `.room(0.5)` - Add reverb
- `.delay(0.5)` - Add echo

## Your First Pattern

Try this simple pattern:

```javascript
sound("bd sd bd sd")
  .bank("RolandTR909")
  .gain(0.8)
```

Now modify it:

```javascript
sound("bd sd bd sd")
  .bank("RolandTR909")
  .gain(0.8)
  .fast(2)        // Make it twice as fast
  .room(0.3)      // Add some reverb
```

## Next Steps

1. Explore the patterns in the `patterns/` directory
2. Start with `basic/` patterns if you're new
3. Try `drums/` for rhythm patterns
4. Check out `melodies/` for melodic ideas
5. Experiment with `effects/` for sound design

## Troubleshooting

**No sound?**
- Check your browser's sound settings
- Make sure you clicked "Play" in Strudel
- Try refreshing the page

**Pattern not working?**
- Check for syntax errors (missing quotes, brackets)
- Make sure you're using valid sound names
- Try a simpler pattern first

## Learn More

- [Strudel Documentation](https://strudel.cc/learn/)
- [Strudel Community Discord](https://discord.gg/tedAmq8bYQ)
- [TidalCycles (inspiration for Strudel)](https://tidalcycles.org/)

Happy live coding! 🎵
