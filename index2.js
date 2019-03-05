var i=0;
var tab = [];

for(i=0;i<10;i++){
    tab[i] = i;
}

// while(i<=20){
//     tab[i] = Math.floor(Math.random() * 20);
//     i++;
// }

// do{
//     tab[i] = Math.floor(Math.random() * 20);
//     i++;
// }while(i<=30);

for(i=(tab.length/2);i<tab.length;i++){
    tab[i]= i+3;
}
console.log(tab);

var note = prompt('C\'est quoi votre note ?');


switch(note){
    case "1":
    case "2":
    case "3":
    case "4":
        alert('Faible');
    break;
    case "5":
    case "6":
        alert('Assez-Bien');
    break;
    case "7":
    case "8":
        alert('Bien');
    break;
    case "9":
    case "10":
        alert('Très Bien');
    break;
    default : 
    alert('Entrez une note !');
}