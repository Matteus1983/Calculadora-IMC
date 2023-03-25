import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber} from './utils.js'

// Variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Funções - functions
form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)
    if (weightOrHeightIsNotNumber) {
        AlertError.open()
        return;
    }
    AlertError.close()

    const result = calculateIMC(weight,height)
    displayResultMessage(result)
}
function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// Fechar a janela de erro ao digitar no campo
inputHeight.oninput =  () => AlertError.close()
inputWeight.oninput =  () => AlertError.close()