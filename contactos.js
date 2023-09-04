//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
//id
//nombres
//apellidos
//teléfono
//ubicaciones
//ciudad
//dirección
//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️


//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let contactos = [
    {'id' : '1', 'nombres' : 'Alicia Adela', 'apellidos' : 'Aranda', 'telefono' : '2615675456', 'ubicaciones' : 'sur', 'ciudad' : 'Luján de Cuyo', 'direccion' : 'Isla Nueva 532'},
    {'id' : '2', 'nombres' : 'Agustina Ayelen', 'apellidos' : 'Aranda', 'telefono' : '2615129876', 'ubicaciones' : 'sur', 'ciudad' : 'Luján de Cuyo', 'direccion' : 'Isla Nueva 532'},
    {'id' : '3', 'nombres' : 'Cristian Ariel', 'apellidos' : 'Moreno', 'telefono' : '2613872652', 'ubicaciones' : 'oeste', 'ciudad' : 'Godoy Cruz', 'direccion' : 'Salta 333'},
    {'id' : '4', 'nombres' : 'Pedro Santino', 'apellidos' : 'Silvestrini', 'telefono' : '2612736984', 'ubicaciones' : 'sur', 'ciudad' : 'Luján de Cuyo', 'direccion' : 'San Martin 3673'},
];

//Crea una función para añadir un nuevo contacto a una lista

const agregarContacto = (contacto) =>{
    contactos.push(contacto)

}

agregarContacto({'id' : '5', 'nombres' : 'Daniel Ernesto', 'apellidos' : 'Aranda', 'telefono' : '2614837927', 'ubicaciones' : 'oeste', 'ciudad' : 'Godoy Cruz', 'direccion' : 'Ingenieros 76'})

console.log(contactos)
            
//Crea una función para borrar un contacto existente de la lista

const borrarContacto = (contacto) =>{
    
    contactos.splice(contacto.id - 1, 1)
   
}

borrarContacto({'id' : '4', 'nombres' : 'Pedro Santino', 'apellidos' : 'Silvestrini', 'telefono' : '2612736984', 'ubicaciones' : 'sur', 'ciudad' : 'Luján de Cuyo', 'direccion' : 'San Martin 3673'})

console.log(contactos)
