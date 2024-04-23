console.groupCollapsed("Manejo de Objetos")
const noImportantName = "lucas perez"

const coder = {
    id: "c001",
    name: "marlon",
    lastName: "peña",
    birthDate: new Date("2000-12-23 18:00:00"),
    indentificacionNumber: "1007405332",
    email: "marlono1naranjo@gmail.com",
    clan: "dell",
    phoneNumber: "3194746457",
    codebtor: "janeth naranjo",
    location: {
        country: "Colombia",
        city: "Medellin",
        address: "cr 50a # 58-08",
    },

    workingDay: "media",
    saludar: function () {
        console.log(`hola mundo soy ${this.name}`)// con this se trae la propiedad directamente en el objeto
    }
}
console.group("Show data")
//Existen diferentes formas de mostrar la informacion
console.log(coder.name, coder.lastName)
console.log(coder["name"], coder["lastName"])
console.log(coder.name, coder["lastName"])
coder.saludar()
console.log(this.name) //palabra reservada this no funciona fuera de los objetos
console.log(coder)
console.groupEnd()

console.group("Add data")
coder.typeBlood = "O +"
coder["gener"] = "male"

coder.emergency = {}
/* coder.contactName = "yanina gonzalez"
coder["backupPhoneNumber"] ="3215448662" */ // Se agregan directamente
coder.emergency.contactName = "yanina gonzalez"
coder.emergency["backupPhoneNumber"] = "3215448662" // agregar datos al pbjeto dentro del objeto

Object.defineProperty(coder, "teamLeader", {
    value: "robinson"
    /* writable: false, //permite actualizar la información 
    enumerable: true,//permite hacerla visible
    configurable: true,//permite que la propiedad sea eliminada */
})

console.log(coder)
console.groupEnd()
console.group("Update date")
coder.id = "T001"
coder["phoneNumber"] = "3215448662"
console.log(coder)
console.groupEnd()

console.group("assign objetcs")
const objetoA = {
    a: "alpha",
    b: "beta",
    c: "chalie"
}

const objetoB = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

console.log(objetoA)
console.log(objetoB)

Object.assign(objetoA, objetoB)

console.log(objetoA)
console.log(objetoB)
console.groupEnd()

console.group("sum object")
const objetoC = {
    a: "alpha",
    b: "beta",
    c: "chalie"
}

const objetoD = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

console.log(objetoC)
console.log(objetoD)

const sumObjetcs = { ...objetoC, ...objetoD }

console.log(sumObjetcs)
console.groupEnd()

console.group("destructuring")
const person = {
    nameCoder: "marlon",
    lastNameCoder: "peña",
    birthDateCoder: new Date("2000-12-23 18:00:00"),
    indentificacionNumberCoder: "1007405332",
    locationCoder: {
        countryCoder: "Colombia",
        stateCoder: "antioquia",
        cityCoder: "Medellin",
        addressCoder: "cr 50a # 58-08",
    },
    email: "marlono1naranjo@gmail.com"
}

//forma manual 
const nameM = person.nameCoder
const documentIdM = person.indentificacionNumberCoder
const emailM = person.emailCoder

console.log(nameM);
console.log(documentIdM);
console.log(emailM);

//forma dinamica
const {
    nameCoder: nombre,
    lastNameCoder: apellido,
    locationCoder: {
        addressCoder: direccion
    },
} = person

console.log(nombre, apellido)
console.log(direccion)
console.groupEnd()

console.group("Ejercicio práctico")
/* Crear un objeto mascota, este objeto debe contener la informacion del nombre, edad, peso, raza, especie, y propietario, propietario debe 
tener los datos de nombre, apellido, tipo documento y documento
se deben contar con 2 metodos, uno que imprima el nombre de la mascota y su edad; el otro metodo debe retornar los datos del propietario */
const mascota = {
    nombreM: "luna",
    edadM: "12"/* new Date("2012-06-15 18:00:00") */,
    peso: "20 kg",
    raza: "criolla",
    especie: "canina",
    propietario: {
        nombre: "marlon",
        apellido: "peña",
        tipoDocumento: "c.c",
        documento: "1007405332",
        infoPropietario:  function () {
            return `
Datos propietario:
Nombre del propietario = ${this.nombre}
Apellido = ${this.apellido} 
Tipo de documento = ${this.tipoDocumento}
Documento = ${this.documento}  `
        }
    },
    infoMascota: function () {
        return `
Nombre de la mascota = ${this.nombreM}
Edad = ${this.edadM} `
    }
}

console.log(mascota.infoMascota())
console.log(mascota.propietario.infoPropietario())
console.groupEnd()

console.groupEnd()

