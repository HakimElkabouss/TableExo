let x = Math.floor(Math.random() * 1000);
console.log(x);
let nom = prompt('Entrez votre nom :');
let number = prompt('Saisir un entier :');
let tentative = 0;


while(number < x){
    alert('Vous etes largement inférieur');
    number = prompt('Saisir un entier :');
    tentative++;
}
while(number > x){
    alert('Vous etes largement supérieur');
    number = prompt('Saisir un entier :');
    tentative++;
}
while(number === "triche"){
    alert(x);
}
while(number == x){
    alert('bonjour '+nom+', Bon résultat, vous avez tenté '+tentative+' fois');
}




// switch(number){
//     case x:
//         alert('bonjour '+nom+', Bon résultat');
//     break;
//     case "triche":
//         alert(x);
//     break;
// }

// if(number > x){
//     alert('la différence entre x et votre saisie est supérieur à ', x-100);
//     number = prompt('Saisir un entier :');
// }else if (number < x){
//     alert('la différence entre x et votre saisie est inférieur', x+100);
//     number = prompt('Saisir un entier :');
// }else if (number === "triche"){
//     alert(x);
// }else if (number == x){
//     alert('bonjour '+nom+', Bon résultat');
// }




// if(number > x){
//     prompt('Vous etes trop loin');
// }else if(number < x){
//     prompt('vous etes presque');
// }else if(number = x){
//     alert('bonjour '+nom+', Bon résultat');
// }
