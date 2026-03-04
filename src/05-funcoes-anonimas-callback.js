// ============================================
// 05 - FUNÇÕES ANÔNIMAS E CALLBACKS
// ============================================

// Função anônima atribuída a variável
const funcaoAnonima = function() {
    console.log("Sou uma função anônima");
};

funcaoAnonima();

// Função anônima como callback
function processarDados(dados, callback) {
    console.log("Processando dados...");
    const resultado = dados.map(item => item * 2);
    callback(resultado);
}

processarDados([1, 2, 3], function(resultado) {
    console.log("Resultado:", resultado);
});

// Callback com arrow function
processarDados([4, 5, 6], (resultado) => {
    console.log("Resultado (arrow):", resultado);
});

// Callbacks em métodos de array
const numeros = [1, 2, 3, 4, 5];

// forEach - executa função para cada elemento
numeros.forEach(function(numero) {
    console.log("Número: " + numero);
});

// map - transforma cada elemento
const dobrados = numeros.map(numero => numero * 2);
console.log("Dobrados:", dobrados);

// filter - filtra elementos
const maioresQue3 = numeros.filter(numero => numero > 3);
console.log("Maiores que 3:", maioresQue3);

// setTimeout com callback
setTimeout(function() {
    console.log("Executado após 1 segundo");
}, 1000);

// setInterval com arrow function
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);
    if (contador >= 3) {
        clearInterval(intervalo);
    }
}, 500);
