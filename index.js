// Declarer un tableau
var tableau = [8,6,7,4,2,17,8,19,6,43,65,14,45,42,10];
var i=0;

// Ajouter 100 valeurs en hasard
for(i = 0 ; i < 100 ; i++ ){
    var x = Math.floor(Math.random() * 100) ;
    tableau.push(x);
}
console.log(tableau);

// La valeur Max et Min du tableau
var max=0;
for(i=0;i<tableau.length;i++){
    if(tableau[i] > max) max = tableau[i];
}
console.log(max);

var min=0;
for(i=0;i<tableau.length;i++){
    if(tableau[i] < min) min = tableau[i];
}
console.log(min);
// console.log(Math.max(...tableau));
// console.log(Math.min(...tableau));


// La somme des valeurs de tableau
var somme = 0;
for(i = 0 ; i < tableau.length ; i++){
    somme += Number(tableau[i]);
}
console.log(somme);

// Moyenne des valeurs 
console.log(somme/tableau.length);

// Placer les valeurs dans leurs tableaux correspendant 
var tab1 = [];
var tab2 = [];
for(i = 0 ; i < tableau.length ; i++ ){

    if(tableau[i] <= 10){
    tab1.push(tableau[i]);
    }else{
    tab2.push(tableau[i]);
    }

}
console.log(tab1);
console.log(tab2);

// Trier les tableaux tab1 et tab2
tab1.sort();
tab2.sort();
console.log(tab1);
console.log(tab2);

// Concatener les deux tableaux tab1 et tab2
console.log(tab1.concat(tab2));

// Supprimer tous les valeurs de tableau 
for(i=0;i<tableau.length; i++){
    delete tableau[i];
}
console.log(tableau);

// Supprimer tous les valeurs de tab1
while(i<tab1.length){
    delete tab1[i];
}
console.log(tab1);

// Supprimer tous les valeurs de tab2
do{
    delete tab2[i]
}while(i<tab2.length);
console.log(tab2);






