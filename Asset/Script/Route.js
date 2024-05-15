/**
*Définie une route de l'appliation
*@constructor
*@param {string} url
*@param {string} title le nom de la page
*@param {string} pathHtml chemin vers le fihier html
*@param {string} pathJS (optionnel) chemin vers le fichier JS
*/
export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
    }
}