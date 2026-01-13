// Filter Sweep
// Demonstrates filter modulation techniques

s("sawtooth")
  .note("c2")
  .lpf(sine.range(200, 2000).slow(4))
  .lpq(10)
  .gain(0.5)
  .room(0.3)
