import Cookies from "js-cookie"

var Type = "token"

function getCookie() {
  return Cookies.get(Type)
}

function setCookie(value) {
  Cookies.set(Type, value, { expires: 7 })
}

function removeCookie() {
  Cookies.remove(Type)
}

export { getCookie, setCookie, removeCookie }
