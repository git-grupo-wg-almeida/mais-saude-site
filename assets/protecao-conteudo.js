/*
  Mais Saude — deterrentes basicos de copia (client-side).
  IMPORTANTE: isso NAO impede acesso ao HTML/CSS/JS — qualquer navegador,
  leitor de tela, ferramenta de auditoria ou agente automatizado precisa
  baixar esse conteudo para renderizar a pagina, entao nada client-side
  bloqueia "ver codigo fonte" de forma definitiva. O valor real desta
  camada e dificultar a copia casual por usuarios comuns; protecao contra
  raspagem em escala depende de robots.txt, headers (ja aplicados via
  vercel.json) e bloqueio/rate-limit em nivel de CDN/WAF.
*/
(function () {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  document.addEventListener('keydown', function (event) {
    var key = (event.key || '').toUpperCase();
    var blockCombo =
      (event.ctrlKey && (key === 'U' || key === 'S')) ||
      (event.ctrlKey && event.shiftKey && (key === 'I' || key === 'J' || key === 'C')) ||
      key === 'F12';
    if (blockCombo) {
      event.preventDefault();
    }
  });
})();
