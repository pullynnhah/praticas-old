function getPatos() {
  return personagens.filter(personagem => personagem.raca === "pato");
}

function getFalar() {
  return personagens.filter(personagem => personagem.hasOwnProperty("falar"));
}

function getOlder() {
  return personagens.filter(personagem => personagem.idade > 4);
}

function getNames() {
  return personagens.map(personagem => personagem.nome);
}

function increaseIdade() {
  return personagens.map(personagem => isNaN(personagem.idade) ? undefined : personagem.idade + 1);
}

function getHumanos() {
  return personagens.filter(personagem => personagem.raca === "humano").map(personagem => personagem.nome);
}

function newPersonagens() {
  return personagens.map(personagem => ({nome: personagem.nome, idade: personagem.idade}));
}

function filterFala() {
  return getFalar().map(personagem => ({
    nome: personagem.nome,
    falar: () => console.log(`Oi meu nome é ${personagem.nome}`)
  }));
}

const personagens = [
  {
    nome: "Irmão do Jorel",
    idade: 8,
    raca: "humano"
  },
  {
    nome: "Jorel",
    idade: 16,
    raca: "humano"
  }, {
    nome: "Nico",
    idade: 12,
    raca: "humano"
  }, {
    nome: "Lara",
    idade: 8,
    raca: "humano",
    falar: function () {
      console.log("Você chama alguém de mulherzinha quando a pessoa é incrível!")
    }
  }, {
    nome: "Vovo Juju",
    raca: "Vovo",
    falar: function () {
      console.log("Abacate faz bem pro cabelo...")
    }
  }, {
    nome: "Gesonel",
    idade: 2,
    raca: "pato"
  },
  {
    nome: "Fabrício",
    idade: 2,
    raca: "pato"
  }, {
    nome: "Danúbio",
    idade: 2,
    raca: "pato"
  }]

const respostas = [getPatos, getFalar, getOlder, getNames, increaseIdade, getHumanos, newPersonagens]

for (let i = 0; i < respostas.length; i++) {
  const resposta = respostas[i];
  console.log(`Resposta ${i + 1}:`);
  console.log(respostas[i]());
  console.log();
}

console.log("Resposta 7:")
getFalar().forEach(personagem => personagem.falar());
console.log();

console.log("Resposta 8:")
console.log(newPersonagens());
console.log();

console.log("Resposta 9:")
console.log(filterFala());
filterFala().forEach(fala => fala.falar());
