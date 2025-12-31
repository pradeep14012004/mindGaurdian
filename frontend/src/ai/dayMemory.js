export function storeDay(mood) {
  const history = JSON.parse(localStorage.getItem("dayHistory")) || [];
  history.push({ mood, time: Date.now() });
  localStorage.setItem("dayHistory", JSON.stringify(history.slice(-7)));
}

export function getPattern() {
  const history = JSON.parse(localStorage.getItem("dayHistory")) || [];
  if (history.length < 3) return null;

  const stressedDays = history.filter(d => d.mood === "Stressed").length;

  if (stressedDays >= 2) return "STRESS_PATTERN";
  return null;
}
