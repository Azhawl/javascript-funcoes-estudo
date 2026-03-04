// ============================================
// 06 - FUNÇÕES DE ORDEM SUPERIOR
// ============================================

// Função que retorna uma função
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log("Dobro de 5: " + dobrar(5));
console.log("Triplo de 5: " + triplicar(5));

// Função que recebe função como parâmetro
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;
const multiplicar = (x, y) => x * y;

console.log("10 + 5 = " + aplicarOperacao(10, 5, somar));
console.log("10 - 5 = " + aplicarOperacao(10, 5, subtrair));
console.log("10 * 5 = " + aplicarOperacao(10, 5, multiplicar));

// Função que retorna função com parâmetros pré-configurados
function criarValidacao(regra) {
    return function(valor) {
        return regra(valor);
    };
}

const validarEmail = criarValidacao(email => email.includes("@"));
const validarPositivo = criarValidacao(num => num > 0);

console.log("Email válido? " + validarEmail("teste@email.com"));
console.log("Número positivo? " + validarPositivo(5));

// Composição de funções
function compor(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const adicionar1 = x => x + 1;
const multiplicar2 = x => x * 2;

const adicionar1DepoisMultiplicar2 = compor(multiplicar2, adicionar1);
console.log("(5 + 1) * 2 = " + adicionar1DepoisMultiplicar2(5));

// Função de ordem superior para criar funções de array
function criarFiltro(condicao) {
    return function(array) {
        return array.filter(condicao);
    };
}

const filtrarPares = criarFiltro(n => n % 2 === 0);
const filtrarMaioresQue5 = criarFiltro(n => n > 5);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Pares:", filtrarPares(numeros));
console.log("Maiores que 5:", filtrarMaioresQue5(numeros));
