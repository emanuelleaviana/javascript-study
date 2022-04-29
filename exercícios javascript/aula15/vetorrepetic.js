let num = [8, 1, 7, 4, 2, 9]

/*for (let pas = 0 ; pas <= val.length ; pas++) {
    console.log(val[pas])
} */

for (let pas in num) {
    console.log(`A posição ${pas} tem valor ${num[pas]}`)
}