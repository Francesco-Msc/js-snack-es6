// Definisco l'array di oggetti
const byciles = [
    {
        nome: 'Van Rysel fcr',
        peso: 8,
    }, 
    {
        nome: 'Bianchi Oltre Comp',
        peso: 7.8,
    },
    {
        nome: 'Pinarello Dogma F12',
        peso: 7.4,
    },
    {
        nome: 'Trek Madone SL',
        peso: 8.74,
    }
];

// definisco la prima bici come la più leggera per avere un confronto iniziale
let lightest = byciles[0];

const bycileslength = byciles.length;

/******** 
FUNZIONE
********/
function weightComparison (){
    for (let i = 1; i < bycileslength; i++){
        if (byciles[i].peso < lightest.peso){
            lightest = byciles[i];
        }
    }
    console.log(`la bici piu leggera è "${lightest.nome}" con un peso di ${lightest.peso} kg`);
};

weightComparison();