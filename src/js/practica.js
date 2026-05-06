function presentacion(nombre){
    console.log(`hola soy ${nombre}`);
}
presentacion("samuel");

function multiplicar (a,b){
    return a*b;
}
let resultado = multiplicar(8,9);
console.log(resultado)

function entrarNoEntrar (edad){
    if(edad>=18){
    console.log("puedes entrar");
}   else {
    console.log("no puedes entrar");
}
}
entrarNoEntrar(17);

function imprimirNumero(numero){
    for(i = 1;i<=numero;i++){
        console.log(i)

    }
} 
imprimirNumero(12)