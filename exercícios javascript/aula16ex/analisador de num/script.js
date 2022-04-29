let num = document.getElementById('txtn')
let res = document.getElementById('res')
let resul = document.getElementById('resul')
let val = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
}
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adiciona() {
    if (isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        res.appendChild(item)
        resul.innerHTML=``
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()   
}

function finaliza() {
    if (val.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0

        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos] < menor)
                menor = val[pos]
        }

        media = soma / tot
        resul.innerHTML= ``
        resul.innerHTML+= `<p>Ao todo temos ${tot} número cadastrados!</p>`
        resul.innerHTML+=`<p>O maior valor informado foi ${maior}. </p>`
        resul.innerHTML+=`<p>O menor valor informado foi ${menor}. </p>`
        resul.innerHTML+= `<p>Somando todos os valores, temos ${soma}. </p>`
        resul.innerHTML+= `<p>A média dos valores digitados é ${media}. </p>`

    }
}