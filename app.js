// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
    // Obtener el valor del input y agregarlo a la lista de amigos
    let nombre = document.getElementById('amigo').value;
    // Validar que el nombre no esté vacío
    if (nombre) {
        nombreAmigos.push(nombre);
        document.getElementById('amigo').value = '';
        mostrarListaAmigos();    
    }else{
        // Si el nombre está vacío, mostrar un mensaje de alerta
        alert('Por favor, ingresa un nombre válido.');
    }
}

function mostrarListaAmigos() {
    // Mostrar la lista de amigos en el elemento <ul> con id 'listaAmigos'
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista antes de agregar los nuevos amigos
    lista.innerHTML = '';
    // Recorrer el array de amigos y crear un elemento <li> para cada uno
    for(let i = 0; i < nombreAmigos.length; i++) {
        // Crear un nuevo elemento <li> y agregarlo a la lista
        let li = document.createElement('li');
        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = nombreAmigos[i];
        // Agregar el <li> al elemento <ul>
        lista.appendChild(li);
    }
}

