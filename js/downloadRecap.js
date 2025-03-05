function downloadImage() {
  // Récupérer l'URL actuelle
  const pathname = window.location.pathname;

  // Associer des images spécifiques à chaque page
  let imageUrl = "/img/recapSachaEva1.png"; // Image par défaut

  if (pathname.includes("index.html")) {
    imageUrl = "/img/recapSachaEva1.png";
  } else if (pathname.includes("mhs.html")) {
    imageUrl = "/img/recapSachaEva2.png";
  } else if (pathname.includes("mhsc.html")) {
    imageUrl = "/img/recapSachaEva3.png";
  }

  // Téléchargement de l'image sélectionnée
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = imageUrl.split("/").pop(); // Garde le nom du fichier
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => console.error("Erreur de téléchargement:", error));
}
