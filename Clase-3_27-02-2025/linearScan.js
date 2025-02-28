/*version con el for

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en el array
};

// Ejemplo de uso
const array = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);

if (result !== -1) {
    console.log(`Elemento encontrado en el índice ${result}`);
} else {
    console.log("Elemento no encontrado en el array");
}
*/

//Version con el while

const linearSearch = (arr, target) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === target) {
            return i; // Retorna el índice del elemento encontrado
        }
        i++;
    }
    return -1; // Retorna -1 si el elemento no se encuentra en el array
};

// Ejemplo de uso
const array = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);

if (result !== -1) {
    console.log(`Elemento encontrado en el índice ${result}`);
} else {
    console.log("Elemento no encontrado en el array");
}
