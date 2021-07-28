// Les Variables

// Constante ( ne peux pas être modifier )
const USERNAME = "TOTO";

// Let ( réduit la portée de la variable )
let variable = 13;

// Les var
var boolean = true;

// Type de variable 
// Boolean ( true or false )
// String ("chaine de caractere")
// Concaténation
const u1 = "Je m'appelle" + USERNAME;
const u2= ` Je m'appelle ${USERNAME}` ;

// Integer => Number
// Float => Nombre à virgule 
// Double => Nombre à virgule (plus grande taille)
// Long 
// Array 
// Object
// Char
// Byte 
// Vérifier le type d'une variable en JS
console.log(typeof boolean);

// Boucle ou instruction itérative ( itération )
// for ( declaration ; instruction ; itérateur )
for (let i = 2; i <= 10; i++){
    // Instructions
    console.log("Salut")
}
// Boucle à condition ( tant que )
// let j = 0;
// while ( j< 10){
//     console.log("while");
//     j++;
// }
// let x = 0;
// do{
//     console.log("do while");
//     x++;
// }while (x < 0)
// console.log("en dehors de la boucle");

// // for in // of
// const user1 = {
//     "username" : "Antoine",
//     "age" : 36
// }
// const user2 = {
//     "username" : "Louis",
//     "age" : 30
// }
// const tabUsers = [user1, user2];

// for ( let u of tabUsers){
//     console.log(u);
// }

// // Tableau
// const array = [12,"Antoine",true,"toto"];
// console.log(array.length);
// console.log(array.indexOf("Antoine"));

// Ecrire un programme qui demande à l'utilisateur son nom et qui répond dans la console : "Salut + nom"

// Demander le nom de l'utilisateur
// Et répéter tant que ce n'est pas rempli
// do {
//     var reponse = prompt("Comment t'appelles-tu ?", "<Entrez votre nom>");
// } while (reponse === "")
// console.log("Salut "+ reponse);

// Ecrire un programme qui demande deux nombre et les additionnes si la saisie est bonne

//  do {
//     var N=prompt("choisissez un premier nombre",'tapez votre nombre ici');
//     var M=prompt("choisissez un second nombre",'tapez votre nombre ici');
//     reponse = (parseInt(M) + parseInt(N) );
//  } while (isNaN(reponse))
//  console.log(reponse);

//switch
// switch(variable){
//     case 1: 
//     // instruction
//     break;
//     case 2: 
//     // instruction
//     break;
// }

// Comparer 3 nombre et donner le plus grand 

// Methode compliqué if 
// var nb1 = parseInt(prompt("Entrer un premier nombre entier"));
// var nb2 = parseInt(prompt("Entrer un deuxième nombre entier"));
// var nb3 = parseInt(prompt("Entrer un troisième et dernier nombre entier"));
 
// if (nb1 > nb2 && nb1 > nb3) {
//     console.log("La première valeure ("+ nb1 + ") est plus garnde que la seconde et la troisième (" + nb2 + " "+ nb3 + ").");
// }
 
// else if (nb2 > nb1 && nb2 > nb3) {
//     console.log("La deuxième valeure ("+ nb2 + ") est plus grande que la première et la dernière (" + nb1 + " "+ nb3 + ").");
// }
 
// else if (nb3 > nb1 && nb3 > nb2) {
//     console.log("La troisième valeure ("+ nb3 + ") est plus grande que la première et la seconde (" + nb1 + " "+ nb2 + ").");
// }

//Methode simple 
// const chiffre = [];
// for (let i = 1; i < 4; i++ ){
//     chiffre.push(parseInt(prompt("Chiffre "+ i + ":")))
// }
// console.log(
//     `[${chiffre}] -> Le plus grand est ${Math.max(...chiffre)}`
//     );

var notes = [12, 16, 9, 2, 5, 15, 16, 18, 20, 13, 11, 15];
var appr = [   
    "Felicitations", // 17 - 20
    "Bon travail", // 11 - 16
    "Peu mieux faire", // 9 - 10
    "Insuffisant", // 4 - 8
    "Mais tu dormais ou quoi ?" // 0 - 3
]
// const result = [];
// for (let note of notes){
//     if ( note >= 17 && note <= 20 )
//         result.push ({note: note, appreciation: appr[appr.indexOf("Felicitations")]});
//     else if ( note >= 11 && note <= 16 )
//         result.push({note: note, appreciation: appr[appr.indexOf("Bon travail")]});
//     else if ( note >= 9 && note <= 10 )
//         result.push({note: note, appreciation: appr[appr.indexOf("Peu mieux faire")]});
//     else if ( note >= 4 && note <= 8 )
//         result.push({note: note, appreciation: appr[appr.indexOf("Insuffisant")]});
//     else if ( note >= 0 && note <= 3 )
//         result.push({note: note, appreciation: appr[appr.indexOf("Mais tu dormais ou quoi ?")]});

// }
// console.log(result);

// Methode avec un tableau d'objet 
// const apprObj = [
//     {
//     noteMin: 17,
//     noteMax: 20,
//     appr: "Felicitations"
//     },
//     {
//     noteMin: 11,
//     noteMax: 16,
//     appr: "Bon travail"
//     },
//     {
//     noteMin: 9,
//     noteMax: 10,
//     appr: "Peu mieux faire"
//     },
//     {
//     noteMin: 4,
//     noteMax: 8,
//     appr: "Insuffisant"
//     },
//     {
//     noteMin: 0,
//     noteMax: 3,
//     appr: "Mais tu dormais ou quoi ?"
//     },
//     ]

// const result = [];
// for (let note of notes){
//     const appreciation = apprObj.find(appreciation => {
//         if (note >= appreciation.noteMin && note <= appreciation.noteMax) return appreciation
//     })
//     result.push({
//         note:note,
//         appreciation: appreciation.appr
//     })
// }
// console.log(result);

    // var nombr1 = parseInt(prompt("Entrer un premier nombre entier"));
    // var operateur = prompt("Entrer un opérateur");
    // var nombr2 = parseInt(prompt("Entrer un deuxième nombre entier"));
    // var resultat = 0;


     
    // switch (operateur)
    // {
    //     case '+':
    //     resultat = parseInt(nombr1) + parseInt(nombr2) ;
    //     break;
    //     case '-':
    //     resultat = parseInt(nombr1) - parseInt(nombr2);
    //     break;
    //     case '*':
    //     resultat = parseInt(nombr1) * parseInt(nombr2);
    //     break;
    //     case '/':
    //     resultat = parseInt(nombr1) / parseInt(nombr2);
    //     break;
        
    // }
    // console.log(resultat);

    // var formule = prompt("Entrer votre calcul avec uniquement 2 opérandes")
    // console.log(formule);
    // const a = parseInt(formule.match('^[0-9]*')[0])
    // const b = parseInt(formule.match('[0-9]*$')[0])
    // const operateur = formule.match('[\+\*\/\-]')[0]

    // switch (operateur)
    // {
    //     case '+':
    //     resultat = parseInt(a) + parseInt(b) ;
    //     break;
    //     case '-':
    //     resultat = parseInt(a) - parseInt(b);
    //     break;
    //     case '*':
    //     resultat = parseInt(a) * parseInt(b);
    //     break;
    //     case '/':
    //     resultat = parseInt(a) / parseInt(b);
    //     break;
        
    // }
    // console.log(resultat);
    

var taille = prompt("Entrer votre taille de pyramide")
for(var i=0;i<taille;i++) {

var output="";
    for(var j=0;j<=taille-i && j <= i;j++) {
        output+="*";
    }
    console.log(output);  
}  

