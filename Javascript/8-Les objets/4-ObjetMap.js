
// les map permettent de faire des couple clé-valeur
// let monMap = new Map([
//     ['prenom','mark']
//     ['nom','zukerberg']
// ]);


// monMap.set ('post','PDG')

// monMap.delete('poste')



//Ici la clé est le nom de l'utilisateur et il a vpour valeur un objet qui contient ces caracteristique
let utilisateurs = new Map();

utilisateurs.set('MarkZukerberg',{
    email: 'mark@facebook.com',
    poste: 'PDG',
})
utilisateurs.set('TimeCook',{
    email: 'time@iphone.com',
    poste: 'CEO',
})

console.log(utilisateurs)