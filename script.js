function contando() {
    let cmc = document.querySelector('input#iniciar')
    let end = document.querySelector('input#final')
    let passo = document.querySelector('input#pass')
    let res = document.querySelector('div#res')

    if (cmc.value.length == 0 || end.value.length == 0 || passo.value.length == 0) { //'se o valor de input for igual a 0'
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(cmc.value) //torna os valores utilizaveis
        let f = Number(end.value)
        let p = Number(passo.value)

        if (p <= 0) { //caso o PASSO seja 0
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1 //PASSO começa a valer 1
        }
        if (i < f) { //contagem crescente
        for (let c = i; c <= f; c += p) { //a contagem começa pelo INICIO, enquanto C for menor ou igual ao final, C recebe ele mesmo mais o PASSO.
            res.innerHTML += `${c} \u{1F449}`//emoji de maozinha
        } //innerHTML vai ser o que ele já tem + C
        } else {
            for (let c = i; c >= f; c += p) {//contagem regressiva
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //emoji de bandeira
    }
}