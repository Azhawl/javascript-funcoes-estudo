// ============================================
// EXERCÍCIOS - NÍVEL 2 (INTERMEDIÁRIO)
// ============================================

// Exercício 1: Crie uma função que recebe um array e retorna a soma de todos os elementos
// Exemplo: somarArray([1, 2, 3, 4]) deve retornar 10

// Exercício 2: Crie uma função que recebe um array de números e retorna apenas os pares
// Exemplo: filtrarPares([1, 2, 3, 4, 5, 6]) deve retornar [2, 4, 6]

// Exercício 3: Crie uma função que recebe um array de strings e retorna o comprimento de cada string
// Exemplo: comprimentos(["hello", "world", "test"]) deve retornar [5, 5, 4]

// Exercício 4: Crie uma função que recebe um array e um callback, e retorna um novo array
// transformado pelo callback
// Exemplo: mapear([1, 2, 3], x => x * 2) deve retornar [2, 4, 6]

// Exercício 5: Crie uma função que recebe um array e um callback, e retorna true se
// todos os elementos passarem no teste do callback
// Exemplo: todos([2, 4, 6], x => x % 2 === 0) deve retornar true

// Exercício 6: Crie uma função que recebe um array e um callback, e retorna true se
// pelo menos um elemento passar no teste do callback
// Exemplo: algum([1, 3, 5], x => x % 2 === 0) deve retornar false

// Exercício 7: Crie uma função que recebe um array de objetos e uma chave, e retorna
// um array com os valores dessa chave
// Exemplo: extrairChave([{nome: "João", idade: 30}, {nome: "Maria", idade: 25}], "nome")
// deve retornar ["João", "Maria"]

// Exercício 8: Crie uma função que agrupa elementos de um array por uma propriedade
// Exemplo: agruparPor([{tipo: "fruta", nome: "maçã"}, {tipo: "fruta", nome: "banana"},
// {tipo: "verdura", nome: "cenoura"}], "tipo")
// deve retornar {fruta: [...], verdura: [...]}

// Exercício 9: Crie uma função que recebe uma função e um delay, e retorna uma versão
// que só executa após o delay (throttle)
// Exemplo: throttle(funcao, 1000) deve executar a função no máximo uma vez por segundo

// Exercício 10: Crie uma função que recebe um array de funções e executa todas em sequência,
// passando o resultado de uma para a próxima (compose)
// Exemplo: compor([x => x + 1, x => x * 2])(5) deve retornar 12 ((5+1)*2)
