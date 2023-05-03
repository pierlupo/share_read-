# share_read-  TP (choix du sujet libre) Application React-native 

### Sujet choisi :

Réalisation d'une application React-native permettant à des utilisateurs de manipuler des livres. L'application possèdera un mode connecté et un mode déconnecté. 

Dans le cadre de l'utilisation de l'application en tant que personne deconnectée, il sera possible uniquement de consulter les livres partagés sur le site et de les trier par titre, et si possible d'autre critères tels que la date de parution.

Dans le cadre d'une utilisation en tant qu'utilisateur connecté, il sera possible de manipuler les données stockées sur Firebase en pouvant éditer, supprimer ou ajouter des livres. Les livres contiendront comme informations leur **titre**, leur **date de parution**, leur **auteur**, une **image de couverture**, et si possible d'autres informations. 

### Exemple de classe :

```js
class Book {
    constructor(
      id,
      categoryIds,
      title,
      imageCoverUrl,
      author,
      releaseDate,
      category,
      summary,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageCoverUrl = imageCoverUrl;
      this.author = author;
      this.releaseDate = releaseDate;
      this.category = category;
      this.summary = summary;
    }
  }
```
### Pour la base de données :

On se loguera à Firebase, il sera idéal de passer par l'utilisation sous forme d'API REST de l'Authentification Firebase, disponible à [cette adresse](https://firebase.google.com/docs/reference/rest/auth?hl=fr). La sécurisation de nos informations de connexion Firebase passera par un JSON de règles de la base de données dont la structure sera la suivante : 

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```
### Sécurisation de données :

Les données nécessaires seront placées dans un fichier à part qui sera ajouté au fichier `.gitignore` dans le but d'éviter de partager notre clé API sur Git.

---
### Screens :

![home](https://user-images.githubusercontent.com/90752877/227599198-80abd59c-9ddb-4477-8c6a-2c8f3351c750.png)

