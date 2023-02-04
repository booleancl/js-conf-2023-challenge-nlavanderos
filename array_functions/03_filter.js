/*
  3) Función filter
  Crea una función llamada filter que reciba un arreglo y un callback.
  Por cada elemento del arreglo la función ejecuta el callback pasando 3 parámetros:
  elemento, indice y el arreglo original.

  La función filter debe devolver un nuevo arreglo con los elementos en que el callback entregue verdadero.

  Ejemplos de uso:

  a) Pasando el primer parámetro:

  filter([10, 20, 30], function(item){
    return (item < 25)
  })

  => Array [10,20]  
*/

function filter(array, callback){
  var arrayLength = array.length;
	var newArray = [];


  return newArray;
}

module.exports = {
  filter: filter
}
