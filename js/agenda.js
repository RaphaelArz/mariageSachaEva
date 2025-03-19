document.addEventListener('DOMContentLoaded', () => {
  const isAndroid = /android/i.test(navigator.userAgent);

  if (isAndroid) {
    document.querySelectorAll('.agenda-button').forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        const fileUrl = this.getAttribute('href');
        const fileName = this.getAttribute('download') || 'event.ics';

        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(err => console.error('Erreur de téléchargement ICS :', err));
      });
    });
  }
});
