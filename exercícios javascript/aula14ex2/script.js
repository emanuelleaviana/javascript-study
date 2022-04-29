function calcular() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML=``
        for (let c=1 ; c<=10 ; c++) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `res${c}`
        res.appendChild(item)
        }
    }
}