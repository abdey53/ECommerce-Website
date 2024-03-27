import { getCartProductFromLs } from "./getCartProductFromLs"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart=(id)=>{
    let cartProduct = getCartProductFromLs();
    cartProduct = cartProduct.filter((curProd)=> curProd.id !== id)

    localStorage.setItem("cartProductLS" , JSON.stringify(cartProduct))

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove()

        showToast("delete", id)
    }
updateCartValue(cartProduct)
}