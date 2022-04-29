function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        foto.src='imagens/manha.png'
        document.body.style.background= '#f08242'
    } else if (hora >=12 && hora < 18) {
        foto.src='imagens/tarde.png'
        document.body.style.background = '#ef8c3a'
    } else {
        foto.src='imagens/noite.png'
        document.body.style.background='#326bae'
    }

}
