// Techno Groove
// Full techno pattern with kick, hi-hats, and bass

stack(
  // Kick drum on every beat
  sound("bd").gain(0.8),
  
  // Snare on 2 and 4 with occasional variations
  sound("~ sd ~ sd")
    .sometimes(x => x.fast(2))
    .gain(0.6),
  
  // Closed hi-hats in 16ths
  sound("hh*8")
    .gain(sequence(0.6, 0.3, 0.5, 0.3).slow(2)),
  
  // Open hi-hat accents
  sound("~ ~ oh ~").gain(0.5),
  
  // Bass line
  note("<c1 c1 g0 a0>")
    .s("sawtooth")
    .lpf(sine.range(300, 800).slow(8))
    .gain(0.3)
).bank("RolandTR909")
