/*
  1) Función map
  Crea una función llamada map que reciba un arreglo y un callback.
  Por cada elemento del arreglo la función ejecuta el callback pasando 3 parámetros:
  elemento, indice y el arreglo original.

  La función map debe devolver un nuevo arreglo con los valores devueltos por el callback.

  Ejemplos de uso:

  a) Pasando todos los parámetros:

  map(['a','b','c'], function(item,index,array){
    return(item + " " + index + " " + array)
  })

  => Array(3) [ "a 0 a,b,c", "b 1 a,b,c", "c 2 a,b,c" ]

  b) Pasando solo el primer parámetro:

  map(['a','b','c'], function(item){
    return(item.toUpperCase())
  })

  => Array(3) [ "A", "B", "C" ]
*/

function map(array, callback){
  // Tu código acá:
    let r = [];
    try {
      if (callback.length === 1) {
        for (const element of array) {
          let newMappedItem = callback(element);
          r.push(newMappedItem);
        }
      } else if (callback.length === 3) {
        for (let i = 0; i < array.length; i++) {
          let newMappedItem = callback(array[i], i, array);
          r.push(newMappedItem);
        }
      }
    } catch (err) {
      return "Error";
    }
    return r;
}

module.exports = {
  map: map
}
