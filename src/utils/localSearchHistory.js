const get = () => {
  return JSON.parse(localStorage.getItem("search_history"));
}

const set = (newLocalHistory) => {
  localStorage.setItem("search_history", JSON.stringify(newLocalHistory));
}

const add = (text) => {
  if (!get()) {
    set([]);
  }
  const localHistory = get();

  if (!text) return;

  if (localHistory.includes(text)) return;

  if (localHistory.length > 3) {
    localHistory.pop();
  }
  localHistory.unshift(text);
  set(localHistory)
}

module.exports = {
  get, set, add
}