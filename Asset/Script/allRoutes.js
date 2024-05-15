/**
 * Crée un tableau contenant toutes les routes de l'application et définit la variablewebsiteName qui est le nom du site
 */
import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../../pages/home.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";