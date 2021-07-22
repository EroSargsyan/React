export function setStorage(items) {
  localStorage.setItem("toDos", JSON.stringify(items));
}

export function getStorage() {
  return JSON.parse(localStorage.getItem("toDos"));
}
