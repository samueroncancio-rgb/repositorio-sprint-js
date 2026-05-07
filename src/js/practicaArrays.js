// let nombres = ["manuel", "pedro", "juan", "samuel", "gabriel"];

// console.log(nombres[0])
// console.log(nombres[4])

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }


// function sumaArray(numeros) {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         const numero = numeros[i];
//         suma += numero
//     }
//     return suma;
// }
// const resultado = sumaArray([1, 4, 2, 8, 7, 8, 4, 4, 4, 4])

// console.log(resultado);


// function arrayEdad(edades) {
//     // let mayorDeEdad = edades.filter(x => x >= 18) 
//     let mayorDeEdad = []
//     edades.forEach(edad => {
        
//         if (edad >= 18) {
//         mayorDeEdad.push(edad)
//     }
//     });
//     return mayorDeEdad
// }
// const edadMayor = arrayEdad([12,19,20,18,17,15,26])
// console.log(edadMayor)


let videoJuegos = ["Mario Bross", "godTheWar", "rumble"];
videoJuegos.push("needForSpeed" , "goldeNight");
console.log(videoJuegos);

videoJuegos.pop();
 console.log(videoJuegos);


console.log(videoJuegos.length);

console.log(videoJuegos.includes("Mario Bross"));

console.log(videoJuegos.indexOf("godTheWar"))


function mayorMayor(valores){
    let mayor = valores[0];
    for(let i= 0; i <valores.length; i++){
        if(valores[i]>mayor){
            mayor=valores[i];
           
    }
}
 return mayor
}
const valorMayor = mayorMayor([1,8,9,5,12,45,7,8,88]);
console.log(valorMayor)
