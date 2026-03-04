// ============================================
// EXERCÍCIOS - NÍVEL 2 (INTERMEDIÁRIO)
// ============================================

// Exercício 1: Crie uma função que recebe um array e retorna a soma de todos os elementos
// Exemplo: somarArray([1, 2, 3, 4]) deve retornar 10
function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma;
}

// Teste
console.log("Exercício 1:", somarArray([1, 2, 3, 4])); // 10

// Exercício 2: Crie uma função que recebe um array de números e retorna apenas os pares
// Exemplo: filtrarPares([1, 2, 3, 4, 5, 6]) deve retornar [2, 4, 6]
function filtrarPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}

// Teste
console.log("Exercício 2:", filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Exercício 3: Crie uma função que recebe um array de strings e retorna o comprimento de cada string
// Exemplo: comprimentos(["hello", "world", "test"]) deve retornar [5, 5, 4]
function comprimentos(array) {
    let tamanhos = [];
    for (let i = 0; i < array.length; i++) {
        tamanhos.push(array[i].length);
    }
    return tamanhos;
}

// Teste
console.log("Exercício 3:", comprimentos(["hello", "world", "test"])); // [5, 5, 4]

// Exercício 4: Crie uma função que recebe um array e um callback, e retorna um novo array
// transformado pelo callback
// Exemplo: mapear([1, 2, 3], x => x * 2) deve retornar [2, 4, 6]
function mapear(array, callback) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado;
}

// Teste
function dobrar(x) {
    return x * 2;
}
console.log("Exercício 4:", mapear([1, 2, 3], dobrar)); // [2, 4, 6]

// Exercício 5: Crie uma função que recebe um array e um callback, e retorna true se
// todos os elementos passarem no teste do callback
// Exemplo: todos([2, 4, 6], x => x % 2 === 0) deve retornar true
function todos(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

// Teste
function ehPar(x) {
    return x % 2 === 0;
}
console.log("Exercício 5:", todos([2, 4, 6], ehPar)); // true
console.log("Exercício 5:", todos([2, 4, 5], ehPar)); // false

// Exercício 6: Crie uma função que recebe um array e um callback, e retorna true se
// pelo menos um elemento passar no teste do callback
// Exemplo: algum([1, 3, 5], x => x % 2 === 0) deve retornar false
function algum(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

// Teste
console.log("Exercício 6:", algum([1, 3, 5], ehPar)); // false
console.log("Exercício 6:", algum([1, 3, 4], ehPar)); // true

// Exercício 7: Crie uma função que recebe um array de objetos e uma chave, e retorna
// um array com os valores dessa chave
// Exemplo: extrairChave([{nome: "João", idade: 30}, {nome: "Maria", idade: 25}], "nome")
// deve retornar ["João", "Maria"]
function extrairChave(array, chave) {
    let valores = [];
    for (let i = 0; i < array.length; i++) {
        valores.push(array[i][chave]);
    }
    return valores;
}

// Teste
console.log("Exercício 7:", extrairChave([{nome: "João", idade: 30}, {nome: "Maria", idade: 25}], "nome")); // ["João", "Maria"]

// Exercício 8: Crie uma função que agrupa elementos de um array por uma propriedade
// Exemplo: agruparPor([{tipo: "fruta", nome: "maçã"}, {tipo: "fruta", nome: "banana"},
// {tipo: "verdura", nome: "cenoura"}], "tipo")
// deve retornar {fruta: [...], verdura: [...]}
function agruparPor(array, propriedade) {
    let grupos = {};
    for (let i = 0; i < array.length; i++) {
        let valor = array[i][propriedade];
        if (!grupos[valor]) {
            grupos[valor] = [];
        }
        grupos[valor].push(array[i]);
    }
    return grupos;
}

// Teste
console.log("Exercício 8:", agruparPor([{tipo: "fruta", nome: "maçã"}, {tipo: "fruta", nome: "banana"}, {tipo: "verdura", nome: "cenoura"}], "tipo"));

// Exercício 9: Crie uma função que recebe uma função e um delay, e retorna uma versão
// que só executa após o delay (throttle)
// Exemplo: throttle(funcao, 1000) deve executar a função no máximo uma vez por segundo
function throttle(funcao, delay) {
    let ultimaExecucao = 0;
    return function() {
        let agora = Date.now();
        if (agora - ultimaExecucao >= delay) {
            ultimaExecucao = agora;
            return funcao.apply(this, arguments);
        }
    };
}

// Teste
function exemplo() {
    console.log("Função executada!");
}
const exemploThrottle = throttle(exemplo, 1000);
console.log("Exercício 9: Função throttle criada (teste manual)");

// Exercício 10: Crie uma função que recebe um array de funções e executa todas em sequência,
// passando o resultado de uma para a próxima (compose)
// Exemplo: compor([x => x + 1, x => x * 2])(5) deve retornar 12 ((5+1)*2)
function compor(funcoes) {
    return function(valor) {
        let resultado = valor;
        for (let i = 0; i < funcoes.length; i++) {
            resultado = funcoes[i](resultado);
        }
        return resultado;
    };
}

// Teste
function adicionar1(x) {
    return x + 1;
}
function multiplicar2(x) {
    return x * 2;
}
const pipeline = compor([adicionar1, multiplicar2]);
console.log("Exercício 10:", pipeline(5)); // 12