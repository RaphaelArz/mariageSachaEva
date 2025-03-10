function addEvent(eventId) {
  let title = "";
  let description = "";
  let location = "";
  let startDate = "";
  let endDate = "";

  switch (eventId) {
    case "mairieAgenda":
      title = "Cérémonie à la Mairie";
      description = "Mariage civil de Eva & Sacha";
      location = "Mairie de Charenton-le-Pont, 48 rue de Paris, 94220";
      startDate = "20250828T153000";
      endDate = "20250828T163000";
      break;

    case "henne":
      title = "Cérémonie du Henné";
      description = "Célébration traditionnelle après la mairie";
      location = "Péniche MCF2, 1 Quai de la Révolution, 94140 Alfortville";
      startDate = "20250828T180000";
      endDate = "20250828T200000";
      break;

    case "houppa":
      title = "Cérémonie religieuse - La Houppa";
      description = "Mariage religieux de Eva & Sacha";
      location = "Pavillon Gravelle, 2 route du Pesage, 75012 Paris";
      startDate = "20250904T170000";
      endDate = "20250904T220000";
      break;

    case "chabbat":
      title = "Chabbat Hatan";
      description = "Chabbat avec Eva & Sacha";
      location = "Parc hôtel, 10 Avenue Paul Langevin, 92350 Le Plessis-Robinson";
      startDate = "20250905T200000";
      endDate = "20250906T230000";
      break;

    default:
      alert("Événement inconnu");
      return;
  }

  // Format des dates pour Google Calendar et Agenda
  const startDateFormatted = startDate.replace(/T/, "").replace(/-/, "").replace(/:/, "");
  const endDateFormatted = endDate.replace(/T/, "").replace(/-/, "").replace(/:/, "");

  // URL pour Google Calendar (Android et Desktop)
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startDateFormatted}/${endDateFormatted}`;

  // URL pour Agenda (iOS) avec le protocole webcal://
  const webcalUrl = `webcal://www.google.com/calendar/ical/${encodeURIComponent(title)}/${encodeURIComponent(description)}/${encodeURIComponent(location)}/${startDateFormatted}/${endDateFormatted}`;

  // Détecter la plateforme (iOS ou Android)
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Ouvre l'application Agenda iOS (webcal)
    window.location.href = webcalUrl;
  } else if (/Android/i.test(navigator.userAgent)) {
    // Ouvre Google Calendar sur Android
    window.location.href = googleCalendarUrl;
  } else {
    alert("L'ajout d'événement n'est pas supporté sur cette plateforme.");
  }
}
