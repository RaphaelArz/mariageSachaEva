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

  // Format des dates pour iCalendar (.ics)
  const startDateFormatted = `${startDate.substring(0, 4)}-${startDate.substring(4, 6)}-${startDate.substring(6, 8)}T${startDate.substring(8, 10)}:${startDate.substring(10, 12)}:${startDate.substring(12, 14)}Z`;
  const endDateFormatted = `${endDate.substring(0, 4)}-${endDate.substring(4, 6)}-${endDate.substring(6, 8)}T${endDate.substring(8, 10)}:${endDate.substring(10, 12)}:${endDate.substring(12, 14)}Z`;

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apple Inc.//NONSGML iCal 4.0//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDateFormatted}
DTEND:${endDateFormatted}
END:VEVENT
END:VCALENDAR
  `.trim();

  // Créer un fichier .ics
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);

  // Détecter si on est sur un appareil iOS
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Télécharge l'événement au format .ics pour iOS
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.ics`;
    link.click();
  } else {
    alert("L'ajout d'événement n'est pas supporté sur cette plateforme.");
  }
}
