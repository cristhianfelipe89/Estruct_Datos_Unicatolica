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

// Pruebas
//Prueba1
let result1 = insertionSort([5, 2, 9, 1, 5, 6]);
console.log(result1); 
// Resultado1: [1, 2, 5, 5, 6, 9]

//Prueba2
let result2 = insertionSort([3, -1, 0, 7, 4, 1]);
console.log(result2); 
// Resultado2: [-1, 0, 1, 3, 4, 7]

//Prueba3
let result3 = insertionSort([10, 8, 5, 2, 0, -2]);
console.log(result3); 
// Resultado3: [-2, 0, 2, 5, 8, 10]

//Prueba4
let result4 = insertionSort([100, 1, 2, -5, 0, 99]);
console.log(result4); 
// Resultado4: [-5, 0, 1, 2, 99,100]