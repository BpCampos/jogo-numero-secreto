function chuteValorValido(chute) {
    const numero = + chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=
            `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número era ${numeroSecreto}</h3>
            <button class="restart" id="reload">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor<i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior<i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.classList == 'restart') {
        window.location.reload()
    }
})