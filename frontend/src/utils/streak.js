export function updateStreak() {
  const last = localStorage.getItem("lastActive");
  const today = new Date().toDateString();
  let streak = Number(localStorage.getItem("streak")) || 0;

  if (last !== today) streak += 1;

  localStorage.setItem("lastActive", today);
  localStorage.setItem("streak", streak);
}

export function getStreak() {
  return Number(localStorage.getItem("streak")) || 0;
}
