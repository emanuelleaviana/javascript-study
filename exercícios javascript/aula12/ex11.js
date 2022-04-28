var idade = 12

console.log(`A sua idade é de ${idade} anos.`)
if (idade < 16) {
    console.log('NAO VOTA')
} else if (idade < 18 || idade > 65) {
        console.log('VOTO FACULTATIVO')
} else {
        console.log('VOTO OBRIGATÓRIO')
}
