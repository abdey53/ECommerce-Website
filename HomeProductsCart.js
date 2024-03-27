import { homeQuantityToggle } from "./homeQuantityToggle"
import {addToCart} from './addToCart'
const productContainer = document.querySelector('#productContainer')
const productTemplates = document.querySelector('#productTemplates')

export const showProductContainer=(products)=>{
if(!products){
    return false
}
products.forEach((curElem)=>{
const {id , name , category , brand , descrition , price , stock , image} = curElem

const productClone = document.importNode(productTemplate.content, true)

productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)

productClone.querySelector('.productName').textContent = name
productClone.querySelector('.productImage').src = image
productClone.querySelector('.productStock').textContent = stock
productClone.querySelector('.category').textContent = category
productClone.querySelector('.productPrice').textContent = `₹${price}`
productClone.querySelector('.productActualPrice').textContent = `₹${price * 4}`
productClone.querySelector('.productDescription').textContent = descrition

productClone.querySelector(".stockElement").addEventListener('click', (event)=>{
homeQuantityToggle(event , id , stock)
})

productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
addToCart(event, id , stock)
})

productContainer.append(productClone)
})

}