export const fetchFriends = async () => {
    try {
      const response = await fetch('http://192.168.2.70:8080/api/friends');
      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }
      const data = await response.json(); // Antwort in JSON umwandeln
      return data; // Daten zurückgeben
    } catch (err) {
      throw new Error(`Fehler beim Abrufen der Freunde: ${err.message}`);
    }
  };
  