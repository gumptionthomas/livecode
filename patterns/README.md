# Pattern Index

This directory contains livecode patterns organized by category.

## Basic Patterns

### [simple-beat.js](basic/simple-beat.js)
A simple four-beat pattern with kick and snare. Great for beginners.

**Usage:**
```javascript
sound("bd sd bd sd").bank("RolandTR909")
```

### [euclidean.js](basic/euclidean.js)
Introduces Euclidean rhythms for creating polyrhythmic patterns.

**Usage:**
```javascript
stack(
  sound("bd").euclidean(3, 8),
  sound("sd").euclidean(5, 8).delay(0.5),
  sound("hh").euclidean(7, 8)
).bank("RolandTR909")
```

### [live-template.js](basic/live-template.js)
A complete template for live performance with commented sections you can uncomment to build your set progressively.

## Drum Patterns

### [four-on-floor.js](drums/four-on-floor.js)
Classic house/techno beat with kick on every beat, snare on 2 and 4.

### [breakbeat.js](drums/breakbeat.js)
Amen break-inspired breakbeat pattern with speed variations.

### [techno-groove.js](drums/techno-groove.js)
Complete techno groove with kick, snare, hi-hats, and bass line layered together.

## Melodic Patterns

### [pentatonic.js](melodies/pentatonic.js)
Simple melodic pattern using the pentatonic scale with filter automation.

### [arpeggio.js](melodies/arpeggio.js)
Arpeggiated chord progression pattern.

### [bass-line.js](melodies/bass-line.js)
Funky bass line with slides and accents.

### [ambient-pad.js](melodies/ambient-pad.js)
Lush ambient pad with slow chord changes, perfect for creating atmosphere.

## Effects Examples

### [reverb-wash.js](effects/reverb-wash.js)
Demonstrates reverb and delay effects for creating ambient textures.

### [filter-sweep.js](effects/filter-sweep.js)
Shows how to modulate low-pass filters for dynamic sound design.

### [glitch.js](effects/glitch.js)
Glitchy percussion with random variations, panning, and effects.

## Tips for Using These Patterns

1. **Experiment**: Modify the parameters to hear how they affect the sound
2. **Combine**: Use `stack()` to layer multiple patterns together
3. **Transform**: Apply `.fast()`, `.slow()`, `.rev()`, and other transformations
4. **Effects**: Add `.room()`, `.delay()`, `.cutoff()`, and other effects
5. **Sequencing**: Use `<>` for cycling patterns and `[]` for subdivisions

## Learning Resources

- [Strudel Tutorial](https://strudel.cc/learn/first-sounds/)
- [Pattern Reference](https://strudel.cc/learn/patterns/)
- [Function Reference](https://strudel.cc/learn/functions/)
