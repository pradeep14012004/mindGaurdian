export function addCoins(amount) {
  const coins = Number(localStorage.getItem("coins")) || 0;
  localStorage.setItem("coins", coins + amount);
}

export function getCoins() {
  return Number(localStorage.getItem("coins")) || 0;
}
