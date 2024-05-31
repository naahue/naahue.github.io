function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var motivo = document.getElementById("motivo").value;
    var conocimiento = document.querySelector('input[name="conocimiento"]:checked');
    
    if (!nombre || !email || !mensaje || !motivo || !conocimiento) {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    return true;
}