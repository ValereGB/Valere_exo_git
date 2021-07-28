// Les variables 
// Les constantes
// const USERNAME = "Toto"
// // Les let (Nouveau), règle le problème de portée (scope) de la variable
// let chiffre = 13
// // Les var , Soucis de portée de variable, de moins en moins utilisées
// var boolean = true
// // __________________________
// // Type de variable
// // Boolean (true, false)
// // String ("Je suis une chaine de caractère")
// // Concaténation de chaine de caractère.
// const u1 = "Je m'appelle " + USERNAME
// const u2 = `Je m'apelle ${USERNAME}`
// Integer => Number 
// Float =>  Nombre à virgule 
// Double => Nombre à virgule (+++)
// Long 
// Array
// Object 
// Char 
// Byte 
// Verifier le typ d'une variable en JS 
// console.log(typeof chiffre);
// Boucle  
// Instruction itérative 
// Itération
// for (declaration; instruction; itérateur)
// POUR
// POUR (i égale 2; TANT QUE i inférieur ou égale à 10; J'incrémente i de 1)
//      INSTRUCTION
// for (let i = 2; i <= 10; i++) {
//     // Instruction
//     console.log("Salut");
// }
// Boucle à condition
// TANT QUE 
// let j = 0;
// while (j < 0){
//     console.log("while");
//     j++
// }
// let x = 0;
// do {
//     console.log("do while");
//     x++
// } while (x < 0)
// const user1 = {
//     "username": "Antoine",
//     "age": 36
// }
// const user2 = {
//     "username": "Toto",
//     "age": 24
// }
// const tabUsers = [user1, user2]
// for (let u in tabUsers) {
//     console.log(u)  
// }
// TABLEAU
// const array = [12, "antoine", true, "toto"] 
// array.push(345)
// // console.log(array)
// const user2 = {
//     "username": "Toto",
//     "age": 24,
//     "profil": {
//         "titi": 12,
//         "toto": 14,
//     },
//     "sexe": ["hélicoptère", "chien"]
// }
// console.log(user2.sexe)
// console.log(array[array.indexOf("toto")])
// tabUsers.forEach()

// Ecrire un programme qui DEMANDE à l'utilisateur 
// son nom et qui répond dans la console : 
// Salut [Antoine] 

// Demander le prénom de l'utilisateur 
// const username = window.prompt("Indiquer votre prénom")
// J'affiche : "Salut + username" dans la console 
//console.log(`Salut ${username}`)

// Si l'utilisateur ne mets pas de prenom, 
// redemander un prénom => PAS QUE UNE FOIS 
// let username 
// do {
//     username = window.prompt("Indiquer votre prénom")
// } while (username === "")
// console.log(`Salut ${username}`)
// Demander à l'utilisateur 2 chiffres, puis les aditioner 
// Renvoyer le résultats en console 
// let a, b
// do {
//     a = parseInt(window.prompt("Merci d'indiquer le premier nombre : "))
// } while(isNaN(a))
// do{
//     b = parseInt(window.prompt("Merci d'indiquer le deuxième nombre : "))
// } 
// while(isNaN(b))
// console.log(a + b)
// Les instructions conditionnelles
// SI condition OK 
// if(condition) {}
// SI NON SI condition ok
// else if (condition) {}
// SINON ... 
// else {}
// switch 
// switch(variable) {
//     case 1:
//         /// INSTRUTION 
//         break
//     case 2: 
//         /// INSTRUTION 
//         break;
//     default: 
//         /// INSTRUTION 
// }
// Ecrire un programme qui demande à l'utilisateur 3 chiffres 
// Et qui renvoi le plus grand chiffre en console 
// [3,15,5] -> Le plus grand est 15
// const chiffre = [];
// for (let i = 1; i < 4; i++) {
//     let inputUser
//     do {
//         inputUser = parseInt(window.prompt(`Chiffre ${i} : `))
//     } while (isNaN(inputUser))
//     chiffre.push(inputUser)
// }
// console.log(
//     `[${chiffre}] -> Le plus grand est ${Math.max(...chiffre)}`
// )
// const notes = [12, 16, 9, 2, 5, 15, 16, 18, 20, 13, 11, 15]
// // const appr = [   
// //     "Felicitations", // 17 - 20
// //     "Bon travail", // 11 - 16
// //     "Peu mieux faire", // 9 - 10
// //     "Insuffisant", // 4 - 8
// //     "Mais tu dormais ou quoi ?" // 0 - 3
// // ]
// const apprObj = [   
//     {
//         noteMin: 17,
//         noteMax: 20,
//         appr: "Felicitations"
//     },
//     {
//         noteMin: 14,
//         noteMax: 16,
//         appr: "Bon travail"
//     },
//     {
//         noteMin: 11,
//         noteMax: 13,
//         appr: "Bon travail"
//     },
//     {
//         noteMin: 9,
//         noteMax: 10,
//         appr: "Peu mieux faire"
//     },
//     {
//         noteMin: 4,
//         noteMax: 8,
//         appr: "Insuffisant"
//     },
//     {
//         noteMin: 0,
//         noteMax: 3,
//         appr: "Mais tu dormais ou quoi ? "
//     },
// ]

// const result = []
// for (let note of notes) {
//     const appreciation = apprObj.find(appreciation => {
//         if (note >= appreciation.noteMin && note <= appreciation.noteMax) return appreciation
//     })
//     result.push({
//         note: note,
//         appreciation: appreciation.appr
//     })
// }
// console.log(result)
// const result = []
// for (let note of notes) {
//     if (note >= 0 && note <= 3) result.push({note: note, appeciation: appr[appr.indexOf("Mais tu dormais ou quoi ?")]})
//     else if (note >= 4 && note <= 8)result.push({note: note, appeciation: appr[appr.indexOf("Insuffisant")]})
//     else if (note >= 9 && note <= 10)result.push({note: note, appeciation: appr[appr.indexOf("Peu mieux faire")]})  
//     else if (note >= 11 && note <= 16)result.push({note: note, appeciation: appr[appr.indexOf("Bon travail")]}) 
//     else result.push({note: note, appeciation: appr[appr.indexOf("Felicitations")]})

// }
// console.log(result)


// const result = [] 
// for (let note of notes) {
//     if (note < 4) result.push({note: note, appreciation: appr[appr.indexOf("Mais tu dormais ou quoi ?")]})
//     else if (note >= 4 && note < 9) result.push({note: note, appreciation: appr[appr.indexOf("Insuffisant")]})
//     else if (note >= 9 && note < 11) result.push({note: note, appreciation: appr[appr.indexOf("Peu mieux faire")]})
//     else if (note >= 11 && note < 17) result.push({note: note, appreciation: appr[appr.indexOf("Bon travail")]})
//     else result.push({note: note, appreciation: appr[appr.indexOf("Felicitations")]})
// }
// console.log(result)
// const apprObj = [   
//     {
//         noteMin: 17,
//         noteMax: 20,
//         appr: "Felicitations"
//     },
//     {
//         noteMin: 11,
//         noteMax: 16,
//         appr: "Bon travail"
//     },
//     {
//         noteMin: 9,
//         noteMax: 10,
//         appr: "Peu mieux faire"
//     },
//     {
//         noteMin: 4,
//         noteMax: 8,
//         appr: "Insuffisant"
//     },
//     {
//         noteMin: 0,
//         noteMax: 3,
//         appr: "Mais tu dormais ou quoi ?"
//     },
// ]
// const result2 = []
// for (let note of notes) {
//     const appr = apprObj.find(elem => {
//         if (note >= elem.noteMin && note <= elem.noteMax) return elem
//     })
//     result2.push({
//         note: note,
//         appr: appr.appr
//     })
// }
// console.log(result2)
/*
[
    {
        note: 12,
        appreciation: "Bon travail"
    },
    {
        note: 16,
        appreciation: "Bon travail"
    }
]
*/
/* Calculatrice 
    Vous demandez à l'utilisateur le premier opérande 
    Vous demandez à l'utilisateur l'opérateur 
    Vous demandez à l'utilisateur le deuxième opérande 
    Retourne le résultat : 4 + 3 = 7 
    On ne fait que les opérations classique = [ + , - , / , *]
*/

// const a = parseInt(prompt("Indiquez le 1er chiffre : "))
// const o = prompt("Indiquez l'opérateur de votre calcul (+, -, *, /) : ")
// const b = parseInt(prompt("Indiquez le 2eme chiffre : "))
// const calcul = prompt("Indiquer cotre calcul");
// const a = parseInt(calcul.match('^[0-9]*')[0])
// const b = parseInt(calcul.match('[0-9]*$')[0])
// const o = calcul.match('[\+\*\/\-]')[0]
// switch(o) {
//     case '+':
//         console.log(`${a} ${o} ${b} = ${a + b}`)
//         break
//     case '-':
//         console.log(`${a} ${o} ${b} = ${a - b}`)
//         break
//     case '*':
//         console.log(`${a} ${o} ${b} = ${a * b}`)
//         break
//     case '/':
//         console.log(`${a} ${o} ${b} = ${a / b}`)
//         break
//     default:
//         console.log("Votre calcul n'est pas correct")
//         break
// }


// Demander un nombre à l'utilisateur 
// par exemple 5
console.log("*")
console.log("** ")
console.log("***")
console.log("****")
console.log("*****")
console.log("****")
console.log("***")
console.log("**")
console.log("*")












// const calc = prompt("Votre calcul")
// const a = calc.match('^[0-9]')
// const o = calc.match('[\+|-|\*\/]')
// const b = calc.match('[0-9]$')
// console.log(a)
// console.log(o)
// console.log(b)





