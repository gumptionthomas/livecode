// Pentatonic Melody
// Simple melodic pattern using pentatonic scale

note("c4 d4 e4 g4 a4 c5")
  .s("sawtooth")
  .lpf(sequence(500, 1000, 1500, 2000).slow(4))
  .lpq(10)
  .gain(0.5)
