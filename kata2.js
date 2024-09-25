/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(numbers) {

return numbers.filter(x => x % 2 == 0);
}

console.log(sumOfEvenNumbers(numbers));


/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

function maxNumber(numbers2) {

return Math.max(...numbers2);
}

console.log(maxNumber(numbers2));
