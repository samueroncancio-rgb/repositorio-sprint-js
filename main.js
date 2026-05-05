let inventario = [];
let opcion = 0;

while (opcion !== 7) {
  console.log("1. Agregar producto");
  console.log("2. Eliminar producto");
  console.log("3. Modificar producto");
  console.log("4. Buscar producto");
  console.log("5. Filtrar por precio");
  console.log("6. Mostrar inventario");
  console.log("7. Salir");

  opcion = parseInt(prompt("Elige una opción:"));

  switch (opcion) {
    case 1:
      // agregar producto
      let nombre = prompt("Nombre:");
      let categoria = prompt("Categoría:");
      let precio = parseFloat(prompt("Precio:"));
      let cantidad = parseInt(prompt("Cantidad:"));
      let marca = prompt("Marca:");

      let producto = {
        nombre,
        categoria,
        precio,
        cantidad,
        marca
      };
      inventario.push(producto);

      console.log("Producto agregado correctamente");
    break;
    case 6:
    if (inventario.length === 0) {
    console.log("El inventario está vacío");
    } 
    else {
    for (let i = 0; i < inventario.length; i++) {
      console.log(i, inventario[i]);
    }
    }
    break;
    

    case 2:
      // eliminar
      
  }

}