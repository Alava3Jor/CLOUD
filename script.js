function aplicarCambios() {
    const nombre = document.getElementById('nombre').value;
    const colorMensaje = document.getElementById('colorMensaje').value;
    const fuenteMensaje = document.getElementById('fuenteMensaje').value;
    const tamanoFuente = document.getElementById('tamanoFuente').value;
    const estiloBorde = document.getElementById('estiloBorde').value;
    const mensajePersonalizado = document.getElementById('mensajePersonalizado').value;

    const saludo = `¡Hola, ${nombre}! Bienvenido a nuestro servicio cloud. ${mensajePersonalizado}`;
    const saludoElemento = document.getElementById('saludo');
    const saludoContainer = document.getElementById('saludoContainer');

    saludoElemento.innerText = saludo;
    saludoElemento.style.color = colorMensaje;
    saludoElemento.style.fontFamily = fuenteMensaje;
    saludoElemento.style.fontSize = tamanoFuente;
    saludoContainer.style.borderStyle = estiloBorde;
    saludoContainer.style.borderColor = colorMensaje;
}
