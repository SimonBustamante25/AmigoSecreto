// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Elimina espacios innecesarios

    // Validación: campo vacío
    if (nombre === "") {
        alert("Ese no es un nombre valido");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Actualizar visualmente la lista
    mostrarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para mostrar la lista en la página
function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpia la lista antes de volver a pintarla

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");

    // Validación: lista vacía
    if (listaAmigos.length === 0) {
        alert("Agrega nombres para el sorteo");
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}