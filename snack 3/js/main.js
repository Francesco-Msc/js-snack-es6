const boards = [
    'Drake',
    'K2',
    'Burton',
    'Solomon',
    'Bataleon',
    'Jones',
    'Capita',
    'Funky',
    'Gnu',
    'Nitro',
    'Ride',
    'Rome',
    'Roxy'
];

console.log(boards);

const a = 1;
const b = 7;

/********
FUNZIONE 
********/
/**
 * funzione che prende un array e due valori e se questi due valori sono numerici mi restituisce un nuovo array con gli elementi compresi tra i due numeri 
 * @param {array} boards
 * @param {number} a
 * @param {number} b
 * @returns {array}
 */
function myBestBoards(boards, a, b){
    if (!isNaN(a) && !isNaN(b) && a < b){
        return boards.slice(a, b);
    };
}

const result = myBestBoards(boards, a, b)
console.log(result);