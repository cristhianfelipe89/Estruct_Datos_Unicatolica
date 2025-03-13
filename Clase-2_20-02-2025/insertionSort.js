const insertionSort = (A) => {//drclaro la funcion y el argumento de entrada
    let N = A.length;//declaro una variable N que va tener el tamaño del arreglo
    let i = 1;// declaro la variable i que es la inicializadora con el valor de 1

    while (i < N) {//con el while itero hasta elnumero anterior del tamaño del arreglo
        let current = A[i];// le asigo a la variable current el valor del elemento de la posición 2
        let j = i - 1;//creo e inicializó la variable j en 0 es decir la primera posición

        while (j >= 0 && A[j].name > current.name) {// valido que mi variable cero sea igual o mayor a cero o la posición inicial y comparo el contenido de cada posición
            A[j + 1] = A[j];//asigna en la siguiente posición  el valor de la pocisión j
            j = j - 1;// decrementa en uno el valor de la variable j
        }

        A[j + 1] = current;//asigna el valor de current el valor del siguiente valor de j
        i = i + 1;// incrementa el valor de en 1 cuando sale del while interno
    }

    return A;// retorna el valor del arreglo A
}


let B =[
    {"name": "Camila","code":1},
    {"name": "Daniel","code":2},
    {"name": "Sofía","code":3},
    {"name": "Juan","code":4},
    {"name": "Valentina","code":5},
    {"name": "Carlos","code":6},
    {"name": "Isabella","code":7},
    {"name": "Andrés","code":8},
    {"name": "Mariana","code":9},
    {"name": "Felipe","code":10}
]

console.log(insertionSort(B))

/*
// Pruebas
// Prueba 1
let result1 = insertionSort([5, 2, 9, 1, 5, 6]);
console.log(result1); 
// Resultado 1: [1, 2, 5, 5, 6, 9]

// Prueba 2
let result2 = insertionSort([3, -1, 0, 7, 4, 1]);
console.log(result2); 
// Resultado 2: [-1, 0, 1, 3, 4, 7]

// Prueba 3
let result3 = insertionSort([10, 8, 5, 2, 0, -2]);
console.log(result3); 
// Resultado 3: [-2, 0, 2, 5, 8, 10]

// Prueba 4
let result4 = insertionSort([100, 1, 2, -5, 0, 99]);
console.log(result4); 
// Resultado 4: [-5, 0, 1, 2, 99, 100]
*/

/*
posible mejora

const insertionSort = (A) => {
    const N = A.length;
    for (let i = 1; i < N; i++) {
        let current = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > current) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = current;
    }
    return A;
};

*/