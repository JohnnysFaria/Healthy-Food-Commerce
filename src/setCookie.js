export function getCookie() {
  const cookies = document.cookie;
  let objectCookies = cookies
    .split(';')
    .map((cookie) => cookie.split('='))
    .reduce((acumulator, [key, value]) => ({
      ...acumulator,
      [key.trim()]: decodeURIComponent(value)
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()),
    }));
  return objectCookies.nome;
}
export function setCookie(cookieKey, cookieValue, expiresDays = 1) {
  let day = new Date();
  day.setTime(day.getTime() + expiresDays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + day.toString();
  document.cookie = cookieKey + '=' + cookieValue + ';' + expires + ';path=/';
}
