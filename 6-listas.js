console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
console.log(`Destinos possíveis: `)
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`) //adiciona um item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //remove um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //imprime um item expecífico da lista