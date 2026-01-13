// Live Set Template
// A complete template for a live performance
// Uncomment different sections to build your set

// Drums
stack(
  // Kick
  sound("bd").bank("RolandTR909").gain(0.8),
  
  // Snare
  sound("~ sd ~ sd").bank("RolandTR909").gain(0.6),
  
  // Hi-hats
  sound("hh*8").bank("RolandTR909").gain(0.4)
)

// Uncomment to add bass:
// .stack(
//   note("<c2 c2 g1 a1>")
//     .s("sawtooth")
//     .lpf(500)
//     .gain(0.3)
// )

// Uncomment to add melody:
// .stack(
//   note("<c4 e4 g4 a4>")
//     .s("triangle")
//     .room(0.5)
//     .gain(0.2)
// )

// Uncomment to add effects:
// .room(0.3)
// .delay(0.5)
