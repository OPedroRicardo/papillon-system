//used at ../Model/Product.js
export const addRow = (date, hour, type, price) => {
    const table = document.querySelector('table')
        table.innerHTML += `
        <tr>
            <td>${date}</td>
            <td>${hour}</td>
            <td>${type}</td>
            <td>${parseFloat(price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        </tr>`
}