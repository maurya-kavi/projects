const cartItem = document.getElementById("cart-items")
const cTotal = document.getElementById("cart-total")
const product = document.querySelectorAll(".product")

let totalPrice =0
const h = document.createElement("h3")
const emptycart = document.querySelector(".empty-cart")

cTotal.appendChild(h)
h.innerHTML = "Total: $"+totalPrice.toFixed(2)
function addToCart(productName , price){
    // const priceString = product.getAttribute("p")
    // const priceP = parseFloat(priceString)
    const priceP = parseFloat(price)
   
    totalPrice +=priceP

    h.innerHTML = "Total: $"+totalPrice.toFixed(2)
    // cTotal.innerHTML = "Total: $"+totalPrice.toFixed(2)


    
    if(totalPrice!==0){
        if(cartItem.contains(emptycart)){
            cartItem.removeChild(emptycart)
        }
        
        

        const item = document.createElement("div")
        item.className="cart-item"

        const quantity = document.createElement("span")
        quantity.className = "quantity-controls"
        quantity.innerHTML = "1"

        const dec = document.createElement("button")
        const inc = document.createElement("button")
        dec.className = "button"
        inc.className = "button"
        dec.innerHTML = "-"
        inc.innerHTML = "+"
        const buttonD = document.createElement("button")
        buttonD.className = "button"
        buttonD.innerHTML = "Remove"

        // const namespan = Document.createElement("span")
        // namespan.innerHTML = productName
        // item.appendChild(namespan)
        item.appendChild(quantity)
        item.appendChild(dec)
        item.appendChild(inc)
        item.appendChild(buttonD)
        
        
        cartItem.appendChild(item)

    }else{
        cartItem.appendChild(emptycart)

    }

}


