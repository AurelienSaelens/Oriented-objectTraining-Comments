let titulaire1 = new Titulaire("Saelens", "Aurelien");
//console.log(titulaire1);

let titulaire2 = new Titulaire("Talu", "Jean");

titulaire2.identite();

let titulaire3 = new Titulaire("Biren", "Nicolas");
let compte1 = new Compte(titulaire3, 25);

console.log(compte1);
compte1.crediter(150);

console.log(compte1);

compte1.debiter(20);

compte1.afficherSolde();

let compteEpargne = new CompteEpargne(titulaire2, 15);

console.log(CompteEpargne);

CompteEpargne.crediter(35);