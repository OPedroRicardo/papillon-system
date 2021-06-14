import { Product } from '../Model/Product.js'
import { toggleModal } from '../View/ToggleModal.js'

export const sendForm = () => {
    const inputType = document.querySelector('[data-type-form]')
    const inputPrice = document.querySelector('[data-price-form]')

    if( inputType.value == "" || inputPrice.value == "") {
        throw new Error('Preencha todos os campos para progredir.')
    }

    new Product(inputType.value, inputPrice.value)

    toggleModal()
}