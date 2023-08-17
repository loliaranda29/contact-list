//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let contactos = ['Alicia Aranda', 'Agustina Jaramillo', 'Pedro Silvestrini'];

//Crea una función para añadir un nuevo contacto a una lista

const agregarContacto = (contacto) =>{
    contactos.push(contacto)

}

agregarContacto('Yesica Betti')

console.log(contactos)
            
//Crea una función para borrar un contacto existente de la lista

const borrarContacto = (contacto) =>{
    let i = contactos.findIndex(i => i == contacto)
    contactos.splice(i, 1)
}

borrarContacto('Pedro Silvestrini')

console.log(contactos)

//Crea una función para imprimir en consola los contactos presentes en la lista

const imprimirContactos = () => {
    console.log(contactos)
}

imprimirContactos()
