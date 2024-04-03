let numero = 7;

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log("O número", numero, "é", verificarParOuImpar(numero));