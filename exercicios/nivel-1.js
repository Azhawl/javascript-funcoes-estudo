// ============================================
// EXERCÍCIOS - NÍVEL 1 (BÁSICO)
// ============================================

// Exercício 1: Crie uma função que recebe um nome e retorna uma saudação
// Exemplo: saudar("João") deve retornar "Olá, João!"
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Teste
console.log("Exercício 1:", saudar("João")); // "Olá, João!"

// Exercício 2: Crie uma função que calcula a área de um retângulo
// Exemplo: areaRetangulo(5, 3) deve retornar 15
function areaRetangulo(altura, largura) {
    return altura * largura;
}

// Teste
console.log("Exercício 2:", areaRetangulo(5, 3)); // 15

// Exercício 3: Crie uma função que verifica se um número é par
// Exemplo: ehPar(4) deve retornar true, ehPar(5) deve retornar false
function ehPar(numero) {
    return numero % 2 === 0;
}

// Teste
console.log("Exercício 3:", ehPar(4)); // true
console.log("Exercício 3:", ehPar(5)); // false

// Exercício 4: Crie uma função que converte Celsius para Fahrenheit
// Fórmula: F = (C * 9/5) + 32
// Exemplo: celsiusParaFahrenheit(0) deve retornar 32
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Teste
console.log("Exercício 4:", celsiusParaFahrenheit(0)); // 32
console.log("Exercício 4:", celsiusParaFahrenheit(25)); // 77

// Exercício 5: Crie uma função que retorna o maior de dois números
// Exemplo: maiorNumero(10, 5) deve retornar 10
function maiorNumero(a, b) {
    return a > b ? a : b;
}

// Teste
console.log("Exercício 5:", maiorNumero(10, 5)); // 10
console.log("Exercício 5:", maiorNumero(3, 8)); // 8

// Exercício 6: Crie uma função que calcula o fatorial de um número
// Exemplo: fatorial(5) deve retornar 120 (5 * 4 * 3 * 2 * 1)

// Exercício 7: Crie uma função que verifica se uma string é um palíndromo
// Exemplo: ehPalindromo("arara") deve retornar true

// Exercício 8: Crie uma função que conta quantas vogais existem em uma string
// Exemplo: contarVogais("JavaScript") deve retornar 3

// Exercício 9: Crie uma função que inverte uma string
// Exemplo: inverterString("hello") deve retornar "olleh"

// Exercício 10: Crie uma função que calcula a média de três números
// Exemplo: media(10, 20, 30) deve retornar 20
