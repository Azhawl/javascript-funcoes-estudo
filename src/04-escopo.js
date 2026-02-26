// ============================================
// 04 - ESCOPO
// ============================================

// Escopo global
const variavelGlobal = "Sou global";

function exemploEscopo() {
    // Escopo local (função)
    const variavelLocal = "Sou local";
    console.log(variavelGlobal); // Acessa variável global
    console.log(variavelLocal);  // Acessa variável local
}

exemploEscopo();
// console.log(variavelLocal); // Erro: variavelLocal não está definida

// Escopo de bloco (let e const)
function exemploEscopoBloco() {
    if (true) {
        let variavelBloco = "Sou de bloco";
        var variavelFuncao = "Sou de função";
        console.log(variavelBloco);
    }
    // console.log(variavelBloco); // Erro: variavelBloco não está definida
    console.log(variavelFuncao); // Funciona: var tem escopo de função
}

exemploEscopoBloco();

// Hoisting com var
console.log(hoistedVar); // undefined (não erro)
var hoistedVar = "Fui içada";

// Hoisting com let/const (não funciona)
// console.log(hoistedLet); // Erro: Cannot access before initialization
let hoistedLet = "Não fui içada";

// Escopo aninhado
function externa() {
    const externa = "Variável externa";
    
    function interna() {
        const interna = "Variável interna";
        console.log(externa); // Acessa variável da função externa
        console.log(interna);
    }
    
    interna();
    // console.log(interna); // Erro: interna não está definida
}

externa();
