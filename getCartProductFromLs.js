import { updateCartValue } from "./updateCartValue"

export  const getCartProductFromLs=()=>{
let cartProduct = localStorage.getItem("cartProductLS")
if(!cartProduct ){
    return []
}
cartProduct = JSON.parse(cartProduct)
updateCartValue(cartProduct)

return cartProduct;
}