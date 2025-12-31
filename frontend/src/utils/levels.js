export function getLevel(coins){
  if(coins < 20) return "Seed";
  if(coins < 60) return "Sprout";
  if(coins < 120) return "Bloom";
  return "Zen Master";
}
