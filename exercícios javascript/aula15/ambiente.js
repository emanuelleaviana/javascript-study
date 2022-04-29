let num = [2,8,3]

console.log(`O vetor tem ${num.length} elementos`)
console.log(`Em ordem crescente ${num.sort()}`)
console.log(`O segundo valor do vetor é ${num[1]}`)


let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado =(')
} else {
    console.log(`O valor está na posição ${pos}`)

}


