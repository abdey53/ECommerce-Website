import product from "./api/products.json"
import { getCartProductFromLs } from "./getCartProductFromLs"
import {fetchQuantityFromCartLS} from './fetchQuantityFromCartLS'
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLs();

let filterProduct = product.filter((curprod)=>{
   return cartProducts.some((curElem)=> curElem.id === curprod.id)
})

let cartElement = document.querySelector('#productCartContainer')
let  templateContainer = document.querySelector('#productCartTemplate')

const showCartProduct=()=>{
    filterProduct.forEach((curProd)=>{
const {category , id , image , name , stock , price , quantity} = curProd
let productClone = document.importNode(templateContainer.content , true)


let LSActualDAta = fetchQuantityFromCartLS(id , price , quantity);

productClone.querySelector('#cardValue').setAttribute("id", `card${id}`)
productClone.querySelector('.category').textContent = category
productClone.querySelector('.productName').textContent = name
productClone.querySelector('.productImage').src = image;
productClone.querySelector('.productPrice').textContent = LSActualDAta.price
productClone.querySelector('.productQuantity').textContent = LSActualDAta.quantity 

productClone.querySelector('.stockElement').addEventListener('click' , (event)=>{incrementDecrement(event,id,stock,quantity,price)} )

productClone.querySelector('.remove-to-cart-button').addEventListener( 'click', ()=>removeProdFromCart(id) )


cartElement.appendChild(productClone)
    })
}
showCartProduct()

updateCartProductTotal()