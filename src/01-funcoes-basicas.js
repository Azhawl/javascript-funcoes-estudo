// ============================================
// 01 - FUNÇÕES BÁSICAS
// ============================================

// Declaração de função tradicional
function saudacao() {
    console.log("Olá, mundo!");
}

// Chamada da função
saudacao();

// Função com parâmetros
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}

cumprimentar("João");
cumprimentar("Maria");

// Função com retorno
function somar(a, b) {
    return a + b;
}

const resultado = somar(5, 3);
console.log("5 + 3 = " + resultado);

// Função atribuída a uma variável
const multiplicar = function(x, y) {
    return x * y;
};

console.log("4 * 7 = " + multiplicar(4, 7));
