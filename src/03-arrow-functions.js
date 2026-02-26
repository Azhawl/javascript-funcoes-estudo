// ============================================
// 03 - ARROW FUNCTIONS
// ============================================

// Arrow function básica
const dobrar = (numero) => {
    return numero * 2;
};

console.log(`Dobro de 5: ${dobrar(5)}`);

// Arrow function com retorno implícito (uma linha)
const triplicar = (numero) => numero * 3;

console.log(`Triplo de 4: ${triplicar(4)}`);

// Arrow function com um único parâmetro (sem parênteses)
const quadrado = x => x * x;

console.log(`Quadrado de 6: ${quadrado(6)}`);

// Arrow function sem parâmetros
const obterData = () => new Date().toLocaleDateString();

console.log(`Data atual: ${obterData()}`);

// Arrow function com múltiplos parâmetros
const calcularMedia = (a, b, c) => (a + b + c) / 3;

console.log(`Média: ${calcularMedia(10, 20, 30)}`);

// Arrow function em arrays (métodos de array)
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);

console.log(`Números dobrados: ${dobrados}`);
console.log(`Números pares: ${pares}`);
