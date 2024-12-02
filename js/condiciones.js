//desafio borde
const imagen1 = document.querySelector('.audifonos')

imagen1.addEventListener('click', () => {
    if(imagen1.style.border){
        imagen1.style.border = ''
    }else {
        imagen1.style.border = '2px solid blue'
    }
})

//desafio stickers
const num1 = document.querySelector('#articulo1')
const num2 = document.querySelector('#articulo2')
const num3 = document.querySelector('#articulo3')
const btnSumar = document.querySelector('.check')
const resultCompra = document.querySelector('#resultCompra')

btnSumar.addEventListener('click', () => {
    // Validación de los inputs
    if (isNaN(num1.value) || num1.value.trim() === '') {
        resultCompra.textContent = 'El valor del input 1, no es numérico, debe ingresar un número'
        resultCompra.style.color = 'white'
        return
    }
    if (isNaN(num2.value) || num2.value.trim() === '') {
        resultCompra.textContent = 'El valor del input 2, no es numérico, debe ingresar un número'
        resultCompra.style.color = 'white'
        return
    }
    if (isNaN(num3.value) || num3.value.trim() === '') {
        resultCompra.textContent = 'El valor del input 3, no es numérico, debe ingresar un número'
        resultCompra.style.color = 'white'
        return
    }

    const suma = +num1.value + +num2.value + +num3.value

    // Validar si el total es menor o igual a 10
    if (suma <= 10) {
        resultCompra.textContent = `Quieres gastar: ${suma} créditos.`
        resultCompra.style.color = 'white';
    } else {
        resultCompra.textContent = 'Estás gastando demasiados créditos, tu límite es 10'
        resultCompra.style.color = 'white';
    }

    // Limpiar los inputs
    num1.value = ''
    num2.value = ''
    num3.value = ''
});



//desafio password
const select1 = document.querySelector("#firstNumber")
const select2 = document.querySelector("#secondNumber")
const select3 = document.querySelector("#thirdNumber")
const response= document.querySelector("#response")
const codeBtn = document.querySelector(".button")

codeBtn.addEventListener('click', () => {
    const selectedCode = select1.value + select2.value + select3.value
    if(selectedCode === '911'){
        response.innerHTML = 'Password 1 correcto'
        response.style.color = 'white'
    }else if (selectedCode === '714'){
        response.innerHTML = 'Password 2 correcto'
        response.style.color = 'white'
    }
    else {
        response.innerHTML = 'Password Incorrecto'
        response.style.color = 'red'
    }
})