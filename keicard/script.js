// Thème sombre/clair
const button = document.getElementById('themeToggle');
button.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Génération du QR Code
QRCode.toCanvas(document.getElementById('qrcode'), 'https://clinquant-toffee-d8421d.netlify.app/', function (error) {
  if (error) console.error(error);
  else console.log('QR code généré !');
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Service Worker enregistré"))
      .catch((err) => console.error("Erreur SW :", err));
  }
  