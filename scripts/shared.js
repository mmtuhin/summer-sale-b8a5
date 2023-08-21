// Global variable
let total = 0;

//DIv click handler function
function clickHandler(targetedItem){
    console.log(targetedItem.childNodes[5].innerText)
    // const cartItem = document.getElementById('cart-items')
    // const itemName = targetedItem.childNodes[5].innerText
    // const li = document.createElement('li')
    // li.innerText = itemName
    // cartItem.appendChild(li)

    const itemPrice = targetedItem.childNodes[7].innerText.split(" ")[0]
    total = total + parseFloat(itemPrice)
    console.log(total.toFixed(2))
}
