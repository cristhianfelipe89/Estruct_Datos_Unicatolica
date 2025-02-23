const resta = (a,b) =>{
    let signo = '';
    let contador = 0;

    if(a>b){
        signo ='+'
        for(let i = b; i<a;i++){
            contador++;
        }
        return  `El resultado de la diferencia entre ${a} y ${b} es: ${signo}${contador}`;
    }
    if(b>a){
        signo ='-'
        for(let i = a; i<b;i++){
            contador++
        }
        return  `El resultado de la diferencia entre ${a} y ${b} es: ${signo}${contador}`
    }
    else{
        return  `Los numeros son iguales la diferencia entre ${a} y ${b} es: 0`;
    }
}

const multiplicacion = (a,b) =>{
    let resultado = 0;

    if((a===0) ||(b===0)){
        return `El resultado de la multiplicación entre ${a} y ${b} es: 0`;
    }
    else{
        for(let i = 1; i<= b; i++){
            resultado = resultado + a;
        }
        return `El resultado de la multiplicación entre ${a} y ${b} es: ${resultado}`
    }
}

console.log(multiplicacion(5,0))
console.log(multiplicacion(2,5))

console.log(resta(5,3))
console.log(resta(2,5))
console.log(resta(3,3))