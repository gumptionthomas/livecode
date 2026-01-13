// Reverb Wash
// Demonstrates reverb and delay effects on a simple pattern

sound("~ pluck ~ pluck")
  .note("<c3 e3 g3 a3>")
  .room(0.9)
  .size(0.9)
  .delay(0.5)
  .delayfeedback(0.6)
  .delaytime(0.125)
  .gain(0.6)
