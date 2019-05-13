function add(a = 2, b = 3) {
    return a + b;
}
console.log(add('asd', 'ad'))
console.log(add())
console.log(add(undefined, undefined))
console.log(add(undefined, 6))
console.log(add(0, 0))
console.log(add(null, null))
console.log(add('', ''))