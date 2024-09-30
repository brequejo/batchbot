const get = (key) => {
  return localStorage.getItem(key);
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

export const LocalStorage = {
  get,
  set,
  remove,
  clear,
};
