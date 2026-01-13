// Dance Fearless
setcpm(45)

// Top
// $: chord("<G CM7 D6 E5 B5 [G G]>, <G G G G G [G G]>")
//   .voicing().room(.5)
//   .scale("G:major")
//   .sound("gm_electric_guitar_clean")
$: note("<~ B4 [~ C5@3] D5>")
  .scale("G:major")
  .sound("gm_electric_guitar_clean")

// Drum
_$: s("[bd <hh oh>]*2").bank("tr909").dec(.4)

// Bass
// _$: note("<G2 C2 D2 E2 B1 G2>")
//   .scale("G:major")
//   .sound("gm_acoustic_bass")
$: note("<G2 G2 G3 G2>")
  .scale("G:major")
  .sound("gm_acoustic_bass")
 
