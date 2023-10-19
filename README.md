# TP AJAX

## Objectif

Série d'exercices pour apprendre à manipuler la bibliothèque *fetch* en JavaScript et les API REST.

## Mise en place

Créer un dossier *ajax* et pour chaque exercice, créer un sous-dossier correspondant à l'exercice.

Pour chaque exercice, il faudra créer la structure habituelle : un fichier *index.html* et un fichier *main.js* (qui sera appelé en type module).

## Remarques

Sur chaque API, bien analyser quelle est base URL, quels sont les endpoints et les éventuels paramètres pour bien construire l'URL à appeler.

## Géolocalisation

[Documentation de l'API](https://adresse.data.gouv.fr/api-doc/adresse)

### Instructions

3. Créer un bouton "Me géolocaliser". Lorsque l'on clique sur ce bouton, il faut géolocaliser l'utilisateur (et donc récupérer ses coordonnées GPS) puis envoyer une requête vers l'api adresse pour récupérer l'adresse à partir des coordonnées GPS. Une fois l'adresse récupérée, l'afficher dans un paragraphe (qui aura été créé au préalable).

### Rappels

```javascript
navigator.geolocation.getCurrentPosition(position => {
    // position est la position (latitude et longitude) de l'utilisateur 
});
```
