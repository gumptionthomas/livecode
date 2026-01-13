// Arpeggiated Chord Pattern
// Creates an arpeggio from chord progressions

note("<[c2,e2,g2] [a1,c2,e2] [f2,a2,c3] [g2,b2,d3]>")
  .arp("up")
  .s("triangle")
  .lpf(1500)
  .resonance(10)
  .gain(0.4)
