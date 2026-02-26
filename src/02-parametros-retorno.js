// ============================================
// 02 - PARÂMETROS E RETORNO
// ============================================

// Parâmetros padrão (ES6)
function calcularArea(altura, largura = 1) {
    return altura * largura;
}

console.log(`Área: ${calcularArea(5, 3)}`);
console.log(`Área (largura padrão): ${calcularArea(5)}`);

// Múltiplos parâmetros com rest operator
function somarNumeros(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(`Soma: ${somarNumeros(1, 2, 3, 4, 5)}`);

// Retorno múltiplo (usando objetos)
function dividirEResto(dividendo, divisor) {
    return {
        quociente: Math.floor(dividendo / divisor),
        resto: dividendo % divisor
    };
}

const resultado = dividirEResto(17, 5);
console.log(`17 ÷ 5 = ${resultado.quociente} com resto ${resultado.resto}`);

// Função sem retorno explícito (retorna undefined)
function apenasLog(mensagem) {
    console.log(mensagem);
}

const retorno = apenasLog("Teste");
console.log(`Retorno: ${retorno}`);
