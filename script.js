function cambiaFondo(){
    document.body.classList.toggle("dark");
}
function obtenerNumeros() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    return [Number(n1), Number(n2)];
}
function sumar() {
    let [a, b] = obtenerNumeros();
    let resultado = a + b;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function restar() {
    let [a, b] = obtenerNumeros();
    let resultado = a - b;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function multiplicar() {
    let [a, b] = obtenerNumeros();
    let resultado = a * b;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function dividir() {
    let [a, b] = obtenerNumeros();

    if (b === 0) {
        document.getElementById("resultado").textContent = "No se puede dividir entre 0 ❌";
        return;
    }

    let resultado = a / b;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}