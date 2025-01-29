// src/routes/+layout.server.js

export function load({ url }) {
    // Définir les métadonnées pour chaque route
    const routes = {
        "/": {
            title: "PELS Ivoire",
            description: "Bienvenue sur la plateforme officielle de PELS Ivoire.",
            favicon: "/static/assets/img/ok_ivoire.ico"
        },
        // Ajoutez d'autres routes ici
    };

    // Extraire le chemin de l'URL actuelle
    const path = url.pathname;

    // Récupérer les métadonnées correspondantes ou une valeur par défaut
    const metadata = routes[path] || {
        title: "PELS Ivoire",
        description: "Page non trouvée sur PELS Ivoire.",
        favicon: "static/assets/img/default.ico"
    };

    // Retourner les métadonnées pour le layout
    return { metadata };
}
