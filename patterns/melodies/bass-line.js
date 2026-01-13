// Bass Line
// Funky bass line with slides and accents

note("c2 ~ e2 ~ g2 f2 ~ d2")
  .s("sawtooth")
  .cutoff(400)
  .resonance(15)
  .gain(sequence(0.8, 0.6, 0.9, 0.5))
  .slide(sequence(0, 0.1, 0, 0.2))
  .room(0.1)
