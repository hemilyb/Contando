function contando() {
    let cmc = document.querySelector('input#iniciar')
    let end = document.querySelector('input#final')
    let passo = document.querySelector('input#pass')
    let res = document.querySelector('div#res')

    if (cmc.value.length == 0 || end.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(cmc.value)
        let f = Number(end.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }
        if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`//emoji de maozinha
        }
        } else {
            for (let c = i; c >= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //emoji de bandeira
    }
}
