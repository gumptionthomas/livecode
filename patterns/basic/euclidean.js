// Euclidean Rhythm
// Creates polyrhythmic patterns using Euclidean distribution

stack(
  sound("bd").euclidean(3, 8),
  sound("sd").euclidean(5, 8).delay(0.5),
  sound("hh").euclidean(7, 8)
).bank("RolandTR909")
