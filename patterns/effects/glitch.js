// Glitch Percussion
// Glitchy percussion with random variations

sound("cp*8")
  .speed(sequence(1, 1.5, 0.5, 2))
  .sometimes(x => x.fast(2))
  .rarely(x => x.rev())
  .gain(sequence(0.8, 0.3, 0.6, 0.4))
  .pan(rand)
  .delay(0.25)
  .delayfeedback(0.3)
