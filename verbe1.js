console.log("Début de mon programme");
// verbes1.js

// Les types de bases BNS
// 1 - les Boulean
true;
false;

// Table de vérité du ou logique : OR
!true;
!false;
true || true;
true || false;
false || true;

// Table de vérité du ou logique : AND
!true;
!false;
true && true; //=> true
true && false; //=> false 
false && true; //=> false 
false && false; //=>false

//affichage de boolean
console.log("Table de verité du OR, le OU logique");
console.log("false || false = ", false || false);
console.log("false || true = ", false || true);
console.log("true  || false = ", true || false);
console.log("true  || true = ", true || true);

//affichage de boolean
console.log();
console.log();
console.log("Table de verité du AND, le ET logique");
console.log("false && false = ", false && false);
console.log("false && true = ", false && true);
console.log("true  && false = ", true && false);
console.log("true  && true = ", true && true);


//2 - Number
console.log("1 : ", 1);
console.log("1.2 : ", 1.2);
console.log("1+1+ :", 1 + 1);

// 2.1 périmetre d'un carré de coté a. périmetre = a + a + a + a = 4 * a;
// a = 10
// perimetre = 4 * a = 4* 10 = 40

//utilisation d'une variable
let a = 20;
console.log("le Périmetre du carré de coté " + a + "est de" + 4 * a);

//3 - String
console.log("Enzo");
console.log("Carle");

console.log("Enzo" + " " + "Carle");

//LES TYPES COMPLEXES AOK(array, objet, classe)


// Instructions de controle

//le IF (...){...} ELSE {...}
console.log("mon super message 1")
if (false) {
    console.log("mon super message 2 - quand c'est vrai")
} else {
    console.log("mon super message 2 - quand c'est faux")
}
console.log("mon super message 3")



//repeter un truc
//FOR (...;...;...;){}

for (let increment = 0; increment < 10; increment = increment + 1) {
    console.log("incrément = " + increment);
}

for (let i = 0; i < 10; i = i + 1) {
    console.log("incrément = " + i);
}

for (let i = 0; i < 10; i++) {
    console.log("incrément = " + i);
}
for (let i = 0; i < 100; i++) {
    console.log(i + " : " + "je dois arriver a l'heure chaque jour sinon je dois copier 10 fois cette ligne");
}



console.log("fin de mon programme");