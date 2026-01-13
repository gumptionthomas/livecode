// Four on the Floor
// Classic house/techno drum pattern with kick on every beat

stack(
  sound("bd").every(4, x => x.fast(2)),  // Kick drum
  sound("~ sd ~ sd"),                     // Snare on 2 and 4
  sound("hh*8").gain(0.4),               // Hi-hat eighths
  sound("~ ~ oh ~").gain(0.6)            // Open hi-hat accent
).bank("RolandTR909")
