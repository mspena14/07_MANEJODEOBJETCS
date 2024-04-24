console.groupCollapsed("Ejercicios Objetos")
// Ejercicios con Objetos en JavaScript

console.group("Ejercicio 1")
// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad.
const persona = {
    nombre: "marlon",
    edad: 23,
    ciudad: "medellín"
}
console.groupEnd()

console.group("Ejercicio 2")
// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación.
persona.ocupacion = "Asesor"
console.groupEnd()

console.group("Ejercicio 3")
// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola.
console.log(persona.ocupacion)
console.log(persona["ocupacion"])
console.groupEnd()

console.group("Ejercicio 4")
// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación.
const libro = {
    titulo: "un charquito en el mar",
    autor: "marlon peña",
    año: 2024
}
console.groupEnd()

console.group("Ejercicio 5")
// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion.
const informacion = {
   ...persona,
   ...libro
}
console.groupEnd()

console.group("Ejercicio 6")
// 6. Cambia el valor de una propiedad en el objeto persona.
persona.ciudad = "Berlín"
console.groupEnd()

console.group("Ejercicio 7")
// 7. Elimina una propiedad del objeto libro.
delete libro.año
console.groupEnd()

console.group("Ejercicio 8")
// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año.
const coche = {
    modelo: 2024,
    marca: "bmw",
    año: 2024
}
console.groupEnd()

console.group("Ejercicio 9")
// 9. Muestra todas las propiedades del objeto coche en la consola.
console.log(coche)
console.groupEnd()

console.group("Ejercicio 10")
// 10. Agrega un método al objeto coche que imprima un mensaje en la consola.
coche.imprimir = function () {
    console.log(`Este es el ${this.marca} modelo ${this.modelo} del año ${this.año}`)
}
console.groupEnd()

console.group("Ejercicio 11")
// 11. Crea un objeto llamado circulo con propiedades como radio y color.
const circulo = {
    radio: "20",
    color: "negro"
}
console.groupEnd()

console.group("Ejercicio 12")
// 12. Calcula el área del círculo utilizando la fórmula A = πr² y muestra el resultado.
console.log(`El área del circulo es de ${Math.PI*Math.pow(circulo.radio, 2)}`)
console.groupEnd()

console.group("Ejercicio 13")
//13. Crea un objeto llamado rectangulo con propiedades como ancho y alto.
const rectangulo = {
    ancho: 25,
    alto: 18
}
console.groupEnd()

console.group("Ejercicio 14")
// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2* (ancho + alto) y muestra el resultado.
let perimetroRectangulo = 2 * (rectangulo.ancho + rectangulo["alto"])
console.log(`El perimetro del rectangulo es ${perimetroRectangulo}`)
console.groupEnd()

console.group("Ejercicio 15")
// 15. Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas.
const formas = {...circulo, ...rectangulo}
console.groupEnd()

console.group("Ejercicio 16")
// 16. Crea un objeto llamado computadora con propiedades como marca, modelo y precio.
const computadora = {
    marca: "asus",
    modelo: "ac4030",
    precio: "1900000"
}
console.groupEnd()

console.group("Ejercicio 17")
// 17. Muestra el precio de la computadora en la consola.
console.log(computadora.precio)
console.groupEnd()

console.group("Ejercicio 18")
// 18. Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica.
computadora.tarjetaGrafica = true
console.groupEnd()

console.group("Ejercicio 19")
console.groupEnd()