export function updateStreak(mood) {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem("streakData")) || {
    lastDate: null,
    count: 0
  };

  if (data.lastDate === today) return data.count;

  if (data.lastDate === new Date(Date.now() - 86400000).toDateString()) {
    data.count += 1;
  } else {
    data.count = 1;
  }

  data.lastDate = today;
  localStorage.setItem("streakData", JSON.stringify(data));
  return data.count;
}

export function getStreak() {
  return JSON.parse(localStorage.getItem("streakData"))?.count || 1;
}
