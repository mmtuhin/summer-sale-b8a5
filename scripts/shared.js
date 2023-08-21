function clickHandler(targetedItem){
    console.log(targetedItem.childNodes[5].innerText)
    const cartItem = document.getElementById('cart-items')
    const itemName = targetedItem.childNodes[5].innerText
    const li = document.createElement('li')
    li.innerText = itemName
    cartItem.appendChild(li)
}
