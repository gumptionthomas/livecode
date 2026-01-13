// Breakbeat Pattern
// Classic Amen break-inspired drum pattern

sound("bd sd*2 bd [sd cp]")
  .bank("RolandTR808")
  .speed(sequence(1, 1.1, 0.9, 1).slow(2))
  .room(0.3)
