/* function fibo(n) { // O(n)
    let arr = [0, 1]
    for (let i = 0; i < n - 2; i++) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    }
    return arr
}
let result = fibo(8) */


function fiboRec(n, arr = [0, 1]) {// O(n) 
    if (n <= 2 || n > 10) {
        return resultadoFibonacci.innerHTML = `Introduce un número mayor a <strong>4</strong> y menor a <strong>10</strong>`
    }
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return n === 3 ? arr : fiboRec(n - 1, arr)
}

let fiboInput = document.getElementById('fiboInput')
fiboInput.addEventListener('change', () => {
    let resultadoFibonacci = document.getElementById('resultadoFibonacci')
    resultadoFibonacci.innerHTML = `Resultado: <strong> = [${fiboRec(fiboInput.value)}]</strong>`
})

let obtenerFibonacci = document.getElementById('obtenerFibonacci')
obtenerFibonacci.addEventListener('click', () => {
    let resultadoFibonacci = document.getElementById('resultadoFibonacci')
    resultadoFibonacci.innerHTML = `Resultado: <strong> = [${fiboRec(fiboInput.value)}]</strong>`
})