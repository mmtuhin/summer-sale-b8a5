// Global variable
let total = 0;

//DIv click handler function
function clickHandler(targetedItem){
    // For displaying Items
    //console.log(targetedItem.childNodes[5].innerText)
    const cartItem = document.getElementById('cart-items')
    const itemName = targetedItem.childNodes[5].innerText
    const li = document.createElement('li')
    li.innerText = itemName
    cartItem.appendChild(li)
    // For total Calculation
    const itemPrice = targetedItem.childNodes[7].innerText.split(" ")[0]
    total = total + parseFloat(itemPrice)
    console.log(total.toFixed(2))
    const totalAmount = document.getElementById('price-total')
    totalAmount.innerText = total.toFixed(2)

    //Enabling Purchase button
    if(total>0){
        const purchaseBtn = document.getElementById('btn-purchase')
        console.log(purchaseBtn);
        purchaseBtn.removeAttribute('disabled')
    }
    //Enab
}
