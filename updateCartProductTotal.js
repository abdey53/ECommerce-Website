import { getCartProductFromLs } from "./getCartProductFromLs"

export const updateCartProductTotal=()=>{
    let productSubTotal = document.querySelector('.productSubTotal')
    let productFinalTotal = document.querySelector('.productFinalTotal')

    let localCartProducts = getCartProductFromLs()
    let intialValue = 0
    let totalProductPrice = localCartProducts.reduce((accum , curElem)=>{
let productPrice = parseInt(curElem.price)
return accum + productPrice;
},intialValue)

productSubTotal.textContent = `₹${totalProductPrice}`
productFinalTotal.textContent = `₹${totalProductPrice + 50}`
}