const array=[9,4,3,2,7,6,5,8,1]
//array.push(1)//agrega un elemento al final del array
//array.pop()//elimina al ultimo
//array.shift//elimina el primer elemento del array
//array.unshift(0)//agrega un elemento al inicio del array
//array.slice(1,2)//copia una parte de un array se guarda en un array nuevo no modifica al original
//array.splice(0,4)//elimina elementos del array, recibe como argumentos la posicion y la cantidad de elementos y si quiero agregar elementos se hace desde el tercer argumento se puede agregar tanto como quieras
//const nuevo=array.map(elemento=>elemento*2);//modifica y crea un array nuevo y se mantiene el antiguo
//const filtrado= array.filter(elemento=>elemento%2===0)//filtra por una condicion y guarda un nuevo array
//const contador = array.reduce((acc,elemento)=>acc+elemento,0)//reduce al array a un valor absoluto
//const elementoMenor3=array.find(elemento=>elemento<3)//busca elementos que cumplan la condicion, pero solo devuelve el primer valor que encuentre
//const condition=array.some(elemento=>elemento<3)//al menos un elemento cumple la condicion es true
//const condition=array.every(elemento=>elemento<3)// si todos los elementos cumplen la condicion es true 
//array.sort((a,b)=>a-b)//ordena el array de mayor a menor o viceversa
array.reverse()

console.log(array)
