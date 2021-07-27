export function SetLocStorageData(param) {
  localStorage.setItem("data", JSON.stringify(param));
}

export function GetLocStorageData() {
  return JSON.parse(localStorage.getItem("data"));
}
