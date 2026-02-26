// ============================================
// 08 - DESAFIOS
// ============================================

// Desafio 1: Criar uma função que retorna uma função de memoização
function criarMemoizacao(funcao) {
    const cache = {};
    
    return function(...args) {
        const chave = JSON.stringify(args);
        
        if (cache[chave]) {
            console.log("Retornando do cache");
            return cache[chave];
        }
        
        console.log("Calculando...");
        const resultado = funcao(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

const somarLenta = (a, b) => {
    // Simula operação lenta
    return a + b;
};

const somarMemoizada = criarMemoizacao(somarLenta);
console.log(`Primeira chamada: ${somarMemoizada(5, 3)}`);
console.log(`Segunda chamada: ${somarMemoizada(5, 3)}`);

// Desafio 2: Criar um curry function
function curry(funcao) {
    return function curried(...args) {
        if (args.length >= funcao.length) {
            return funcao.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

const somar3 = (a, b, c) => a + b + c;
const somar3Curried = curry(somar3);

console.log(`Curry completo: ${somar3Curried(1)(2)(3)}`);
console.log(`Curry parcial: ${somar3Curried(1, 2)(3)}`);

// Desafio 3: Pipe de funções
function pipe(...funcoes) {
    return function(valor) {
        return funcoes.reduce((acc, fn) => fn(acc), valor);
    };
}

const adicionar1 = x => x + 1;
const multiplicar2 = x => x * 2;
const subtrair3 = x => x - 3;

const pipeline = pipe(adicionar1, multiplicar2, subtrair3);
console.log(`Pipeline(5): ${pipeline(5)}`); // ((5+1)*2)-3 = 9

// Desafio 4: Debounce
function debounce(funcao, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            funcao.apply(this, args);
        }, delay);
    };
}

const buscar = debounce((termo) => {
    console.log(`Buscando: ${termo}`);
}, 300);

// Simula múltiplas chamadas rápidas
buscar("a");
buscar("ab");
buscar("abc"); // Apenas esta será executada após 300ms
