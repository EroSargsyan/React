export function SetLocStorageData(param) {
  window.localStorage.setItem("data", JSON.stringify(param));
}

export function GetLocStorageData() {
  return JSON.parse(window.localStorage.getItem("data"));
}
export function SetLSItemContent(param) {
  window.localStorage.setItem("itemTitle", JSON.stringify(param));
}
export function SetLSItemTitle(param) {
  window.localStorage.setItem("itemContent", JSON.stringify(param));
}

export function GetLSItemTitle() {
  return JSON.parse(window.localStorage.getItem("item"));
}
export function GetLSItemContent() {
  return JSON.parse(window.localStorage.getItem("item"));
}
