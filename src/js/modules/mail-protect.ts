export const mailProtection = () => {
  const e = document.querySelector('.js-mailto');
  e?.setAttribute('href',`mailto:${e.getAttribute('data-mailto-user')}@${e.getAttribute('data-mailto-domain') || window.location.host}`)
}
