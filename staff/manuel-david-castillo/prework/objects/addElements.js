/*
    añadir multiples  elementos 
*/

function addElements(object) {
    // buscar la ultima posicion -> numbers[2] <- para añadir a partir de ella (el primer elemento añadido estara en numbers [3])
    // añadir los elementos que estan en el objeto arguments
    // recorriendo el objecto arguments  añado tantos elementos cuantos haya en el objeto arguments
    // cantidad de elementos a añadir es arguments.length - 1
    for (var i = 1; i < arguments.length; i++) {
        //saco el parametro exacto 
        var element = arguments[i] //
        //introduzco el parametro exacto -> element <- en el objeto
        object[object.length] = element
        //incrementar la longitud -> object.length<-
        object.length++
    }

}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

var animales = {

}

console.log('CASO 1 -> añadir 3 y 4 a numbers')
/* var numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
    length: 5
}    */
addElements(numbers, 3, 4, 5, 6) //arguments = [numbers, 3, 4, 5, 6]
for (var i = 1; i < arguments.length; i++) { //i = 3

    var element = arguments[i] //element = 5

    object[object.length] = element //object.length = 4
    /* var numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
    length: 4
}    */

    object.length++
    /* var numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
    length: 5
}    */
}




console.log('resultado esperado -> { 0: 0, 1: 1, 2: 2 ,3: 3, 4: 4 , length: 5 }', numbers)