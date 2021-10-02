export function getStorage() {
  const storages = localStorage.getItem('nome');
  const storagesFormatado = storages
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  return storagesFormatado;
}

export function setCookie(cookieKey, cookieValue, expiresDays = 1) {
  let day = new Date();
  day.setTime(day.getTime() + expiresDays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + day.toString();
  document.cookie = cookieKey + '=' + cookieValue + ';' + expires + ';path=/';
}
