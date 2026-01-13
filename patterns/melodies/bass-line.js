// Bass Line
// Funky bass line with filter and accents

note("c2 ~ e2 ~ g2 f2 ~ d2")
  .s("sawtooth")
  .lpf(400)
  .resonance(15)
  .gain(sequence(0.8, 0.6, 0.9, 0.5))
  .room(0.1)
