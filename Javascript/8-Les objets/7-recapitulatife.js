// L'objet Set
// Créer un objet Set

let monObjet1 = new Set();
// ou
// let monObjet1 = new Set(['un', 'deux', 'trois']);




// Ajouter un élément
monObjet1.add('quatre');

// Supprimer un élément
monObjet1.delete('quatre');

// Supprimer tous les éléments
monObjet1.clear();

// Avoir la taille de l'objet (le nombre d'éléments)
monObjet1.size;

// Vérifier si un élément existe (renvoie donc true ou false)
monObjet1.has('un');

// Retourner tous les éléments
monObjet1.values();
// ou
monObjet1.keys();
























// L'objet Map
// Créer un objet Map

let monObjet2 = new Map();
// Ajouter un élément

monObjet2.set('John Doe', {
    email: 'john@doe.com',
});
// Supprimer un élément

monObjet2.delete('John Doe');
// Supprimer tous les éléments

monObjet2.clear();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet2.has('John Doe');
// Retourner un élément

monObjet2.get('John Doe');
// Retourner tous les éléments

monObjet2.values();
// ou
monObjet2.keys();













// L'objet WeakSet
// Créer un objet WeakSet

let monObjet3 = new WeakSet();
// ou
// let monObjet3 = new WeakSet([objet1, objet2, objet3]);


// Ajouter un élément

monObjet3.add(objet4);
// Supprimer un élément

monObjet3.delete(objet4);
// Avoir la taille de l'objet (le nombre d'éléments)

monObjet3.length();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet3.has(objet4);














// L'objet WeakMap
// Créer un objet WeakMap

let monObjet4 = new WeakMap();
// Ajouter un élément

const objet1 = {
    nom: 'John Doe',
}
 
monObjet4.set(objet1, {
    email: 'john@doe.com',
});
// Supprimer un élément

monObjet4.delete(objet1);
// Avoir la taille de l'objet (le nombre d'éléments)

monObjet4.length();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet4.has(objet1);
// Retourner un élément

monObjet4.get(objet1);