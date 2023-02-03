const showMenorValor = document.getElementById('menor-valor')
const showMaiorValor = document.getElementById('maior-valor')
const restart = document.querySelector('.restart')

const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return Math.round(Math.random() * maiorValor + 1)
}

showMenorValor.innerText = menorValor
showMaiorValor.innerText = maiorValor



console.log(numeroSecreto)