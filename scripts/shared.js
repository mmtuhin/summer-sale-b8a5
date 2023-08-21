// Global variable
let total = 0;

const payableAmountElement = document.getElementById("payable-amount")
//DIv click handler function
function clickHandler(targetedItem) {
    // For displaying Items
    //console.log(targetedItem.childNodes[5].innerText)

    const cartItem = document.getElementById('cart-items')
    const itemName = targetedItem.childNodes[5].innerText
    const p = document.createElement('p')
    let count = cartItem.childElementCount;
    p.innerHTML = `<div class="text-lg font-semibold"> ${count + 1}. ${itemName} </div>`
    cartItem.appendChild(p)
    // For total Calculation
    const itemPrice = targetedItem.childNodes[7].innerText.split(" ")[0]
    total = total + parseFloat(itemPrice)
    console.log(total.toFixed(2))
    const totalAmount = document.getElementById('price-total')
    totalAmount.innerText = total.toFixed(2)
    payableAmountElement.innerText = total.toFixed(2)

    //Enabling Purchase button
    const purchaseBtn = document.getElementById('btn-purchase')
    if (total > 0) {

        purchaseBtn.removeAttribute('disabled')
        if (total >= 200) {
            couponBtn.removeAttribute('disabled')
        }
        else {
            couponBtn.setAttribute('disabled', true)
        }
    }
}

//Enabling coupon

const couponInput = document.getElementById('input-coupon')
const couponInputString = couponInput.value
const couponBtn = document.getElementById('btn-coupon')

// couponInput.addEventListener('keyup', function(event){
//     const keyPressed = event.target.value
//     if(keyPressed === "SELL200" && total >= 200){

//         couponBtn.removeAttribute('disabled')
//     }
//     else {
//         couponBtn.setAttribute('disabled', true)
//     }
// })



//Applying Discount
let discountValue = 0;
couponBtn.addEventListener('click', function () {
    const discountElement = document.getElementById('discount-amount')
    discountValue = total * (20 / 100);
    if (document.getElementById('input-coupon').value === "SELL200") {
        discountElement.innerText = discountValue.toFixed(2)
        const payableAmount = total - discountValue
        payableAmountElement.innerText = payableAmount.toFixed(2)
        couponInput.value = ""
    }
})

document.getElementById('btn-goHome').addEventListener('click', function () {
    //window.location.reload();
    document.getElementById('cart-items').innerText = ""
    document.getElementById('price-total').innerText = "00.00"
    document.getElementById("payable-amount").innerText = "00.00"
    document.getElementById('discount-amount').innerText = "00.00"
    total = 0;
    discountValue = 0;
    couponBtn.setAttribute('disabled', true)
    document.getElementById('btn-purchase').setAttribute('disabled', true)
})