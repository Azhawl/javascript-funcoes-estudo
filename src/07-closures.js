// ============================================
// 07 - CLOSURES
// ============================================

// Closure básico
function criarContador() {
    let contador = 0;
    
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = criarContador();
const contador2 = criarContador();

console.log("Contador 1: " + contador1()); // 1
console.log("Contador 1: " + contador1()); // 2
console.log("Contador 2: " + contador2()); // 1 (independente)
console.log("Contador 1: " + contador1()); // 3

// Closure com múltiplas funções
function criarCalculadora() {
    let resultado = 0;
    
    return {
        somar: function(valor) {
            resultado += valor;
            return resultado;
        },
        subtrair: function(valor) {
            resultado -= valor;
            return resultado;
        },
        multiplicar: function(valor) {
            resultado *= valor;
            return resultado;
        },
        obterResultado: function() {
            return resultado;
        },
        resetar: function() {
            resultado = 0;
        }
    };
}

const calc = criarCalculadora();
console.log("Somar 10: " + calc.somar(10));
console.log("Subtrair 3: " + calc.subtrair(3));
console.log("Multiplicar 2: " + calc.multiplicar(2));
console.log("Resultado final: " + calc.obterResultado());

// Closure em loops (problema comum)
function criarFuncoes() {
    const funcoes = [];
    
    // Solução: usar let ou IIFE
    for (let i = 0; i < 3; i++) {
        funcoes.push(function() {
            return i; // Cada função tem seu próprio 'i'
        });
    }
    
    return funcoes;
}

const funcoes = criarFuncoes();
funcoes.forEach((fn, index) => {
    console.log("Função " + index + " retorna: " + fn());
});

// Closure para encapsulamento (módulo pattern)
const criarModulo = (function() {
    let variavelPrivada = 0;
    
    function metodoPrivado() {
        return variavelPrivada * 2;
    }
    
    return {
        metodoPublico: function(valor) {
            variavelPrivada = valor;
            return metodoPrivado();
        },
        obterValor: function() {
            return variavelPrivada;
        }
    };
})();

console.log("Método público: " + criarModulo.metodoPublico(5));
console.log("Valor: " + criarModulo.obterValor());
// console.log(criarModulo.metodoPrivado()); // Erro: método privado
