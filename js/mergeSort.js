/* function mergeSort(arr) { // O(n^2) merge sort no recursivo
    console.log(`Entrada: ${arr}`)
    let aux = 0
    for (let indexA = 0; indexA < arr.length; indexA++) {
        for (let indexB = 0; indexB < arr.length; indexB++) {
            if (arr[indexB] > arr[indexA]) {
                aux = arr[indexA]
                arr[indexA] = arr[indexB]
                arr[indexB] = aux
            }
        }
        
    }
    console.log(`Salida: ${arr}`)
    return arr
    
} */

let resultadoMergeSort = document.getElementById('resultadoMergeSort')
function obtenerArrayDeNumeros(texto) {
    if (typeof texto !== 'string' || texto.trim() === '') {
        return null;
    }

    // Acepta enteros o decimales positivos o negativos, separados por coma, con o sin espacios
    const regex = /^(\s*-?\d+(\.\d+)?\s*)(,\s*-?\d+(\.\d+)?\s*)*$/;

    if (!regex.test(texto)) {
        return null; // No es válido
    }

    return texto.split(',').map(num => Number(num.trim()));
}

function merge(arr1, arr2) {
    let arr = arr1.concat(arr2)
    let aux = 0
    for (let indexA = 0; indexA < arr.length; indexA++) {
        for (let indexB = 0; indexB < arr.length; indexB++) {
            if (arr[indexB] > arr[indexA]) {
                aux = arr[indexA]
                arr[indexA] = arr[indexB]
                arr[indexB] = aux
            }
        }
        
    }
    return arr
    
}
function mergeSortRec(arr) { // O(nlogn) merge sort recursivo
    if (arr.length === 1) {
        return arr
    }
    let med = Math.floor(arr.length / 2)
    let left = arr.slice(0, med)
    let rigth = arr.slice(med, arr.length)
    let softLeft = mergeSortRec(left)
    let softRigth = mergeSortRec(rigth)
    return merge(softLeft, softRigth)
}

mergeSortInput.addEventListener('change', (e) => {
    let mergeSortInput = document.getElementById('mergeSortInput')
    let resultadoMergeSort = document.getElementById('resultadoMergeSort')
    mergeSortInput = obtenerArrayDeNumeros(mergeSortInput.value)
    if (mergeSortInput === null) {
        resultadoMergeSort.innerHTML = `<strong>El texto introducido no es valido, debe ser una lista de números separados por comas, y cada número debe ser un número entero o decimal.</strong>`
        e.stopPropagation()
    } else {
        resultadoMergeSort.innerHTML = `Resultado: <strong> = [${mergeSortRec(mergeSortInput)}]</strong>`
    }
})

let obtenerMergeSort = document.getElementById('obtenerMergeSort')
obtenerMergeSort.addEventListener('click', (e) => {
    let resultadoMergeSort = document.getElementById('resultadoMergeSort')
    let mergeSortInput = document.getElementById('mergeSortInput')
    mergeSortInput = obtenerArrayDeNumeros(mergeSortInput.value)
    if (mergeSortInput === null) {
        resultadoMergeSort.innerHTML = `<strong>El texto introducido no es valido, debe ser una lista de números separados por comas, y cada número debe ser un número entero o decimal.</strong>`
        e.stopPropagation()
    } else {
        resultadoMergeSort.innerHTML = `Resultado: <strong> = [${mergeSortRec(mergeSortInput)}]</strong>`
    }
})
