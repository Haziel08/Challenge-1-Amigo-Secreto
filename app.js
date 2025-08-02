// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    // Obtener el valor del input y agregarlo a la lista de amigos
    let nombre = document.getElementById('amigo').value;
    // Validar que el nombre no esté vacío
    if (nombre) {
        // Agregar el nombre a la lista de amigos
        nombreAmigos.push(nombre);
        // Limpiar el input después de agregar el amigo
        document.getElementById('amigo').value = '';
        // Mostrar la lista actualizada de amigos
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

function sortearAmigo() {
    // Verificar que haya al menos dos amigos para sortear
    if (nombreAmigos.length >= 2) {
        // Filtrar solo los amigos que no han sido sorteados aún
        const disponibles = nombreAmigos.filter(a => !amigosSorteados.includes(a));
        // Si no hay amigos disponibles, reiniciar el juego
        if (disponibles.length === 0) {
            alert('¡Todos los amigos ya fueron sorteados! El juego se reiniciará.');
            reiniciarJuego();
            return;
        }

        // Elegir al azar de entre los amigos disponibles
        let indice = Math.floor(Math.random() * disponibles.length);
        // Obtener el amigo sorteado y agregarlo a la lista de amigos sorteados
        let amigoSorteado = disponibles[indice];
        amigosSorteados.push(amigoSorteado);

        // Mostrar resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
    } else {
        // Si no hay suficientes amigos, mostrar un mensaje de alerta
        alert('Necesitas al menos dos amigos para sortear.');
    }
}



function reiniciarJuego() {
    nombreAmigos = [];
    amigosSorteados = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}