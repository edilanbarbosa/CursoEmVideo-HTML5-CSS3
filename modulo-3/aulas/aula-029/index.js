const unidadesFederativasDoBrasilPorPopulacao = [
  { estado: "São Paulo", populacao: 44411238 },
  { estado: "Minas Gerais", populacao: 20538718 },
  { estado: "Rio de Janeiro", populacao: 16054524 },
  { estado: "Bahia", populacao: 14141626 },
  { estado: "Paraná", populacao: 11444380 },
  { estado: "Rio Grande do Sul", populacao: 10882965 },
  { estado: "Pernambuco", populacao: 9058931 },
  { estado: "Ceará", populacao: 8794957 },
  { estado: "Pará", populacao: 8121025 },
  { estado: "Santa Catarina", populacao: 7610361 },
  { estado: "Goiás", populacao: 7056495 },
  { estado: "Maranhão", populacao: 6775805 },
  { estado: "Paraíba", populacao: 3974687 },
  { estado: "Amazonas", populacao: 3941613 },
  { estado: "Espírito Santo", populacao: 3833712 },
  { estado: "Mato Grosso", populacao: 3658649 },
  { estado: "Rio Grande do Norte", populacao: 3302729 },
  { estado: "Piauí", populacao: 3271199 },
  { estado: "Alagos", populacao: 3127683 },
  { estado: "Distrito Federal", populacao: 2817381 },
  { estado: "Mato Grosso do sul", populacao: 2817381 },
  { estado: "Sergipe", populacao: 2209558 },
  { estado: "Rondônia", populacao: 1581196 },
  { estado: "Tocantins", populacao: 1511460 },
  { estado: "Acre", populacao: 830018 },
  { estado: "Amapá", populacao: 733759 },
  { estado: "Roraima", populacao: 636707 },
];

let tableTdHTML = ""
let populacaoTotal = 0

unidadesFederativasDoBrasilPorPopulacao.forEach((unidadeFederativa) => {
    let estado = unidadeFederativa.estado
    let populacaoForm = unidadeFederativa.populacao.toLocaleString("pt-BR")

    populacaoTotal += unidadeFederativa.populacao

    tableTdHTML += `<tr> <td>${estado}</td> <td class="num">${populacaoForm}</td> </tr>`
})

document.querySelector("tbody").innerHTML = tableTdHTML
document.querySelector("tfoot > tr > td > strong").innerHTML = populacaoTotal.toLocaleString("pt-BR")
