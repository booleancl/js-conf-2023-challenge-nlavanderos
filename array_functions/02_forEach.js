/*
  2) Función forEach
  Crea una función llamada foreach que reciba un arreglo y un callback.
  Por cada elemento del arreglo la función ejecuta el callback pasando 3 parámetros:
  elemento, indice y el arreglo original.

  La función forEach debe devolver undefined.

  Ejemplos de uso:

  a) Pasando todos los parámetros:

  forEach(['a','b','c'], function(item,index,array){
    console.log(item + " " + index + " " + array)
  })

  => undefined

  b) Pasando solo el primer parámetro:

  forEach(['a','b','c'], function(item){
    return(item.toUpperCase())
  })

  => undefined
*/

function forEach(array, callback){
  var arrayLength = array.length;	
	for (var i = 0; i < arrayLength; i++) {
    // Tu código acá:
  }
}

module.exports = {
  forEach: forEach
}