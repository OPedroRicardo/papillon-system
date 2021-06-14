import { toggleModal } from './View/ToggleModal.js'
import { sendForm } from './Controllers/SendForm.js'

const openModal = document.getElementById('open-modal-button')
const cancelButton = document.querySelector('.cancel-button')
const saveButton = document.querySelector('.save-button')

openModal.addEventListener('click', toggleModal)
cancelButton.addEventListener('click', toggleModal)
saveButton.addEventListener('click', sendForm)