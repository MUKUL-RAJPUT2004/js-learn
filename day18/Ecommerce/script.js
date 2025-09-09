document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Shoes", price: 10 },
        { id: 2, name: "Watch", price: 20 },
        { id: 3, name: "Shirt", price: 30 },
        { id: 4, name: "Tea", price: 40 },
    ];


    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotalMessage = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkOutBtn = document.getElementById('checkout-btn');

    
    let cart =  JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(carts => renderCart());

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="product-button" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv); // Append to productList, not product
    });

    productList.addEventListener('click', (e)=>{
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute('data-id'))
            console.log(productId);            
            const product = products.find(p => p.id === productId)
            addToCart(product);
        }
    })

    cartItems.addEventListener('click', (a)=>{
        if(a.target.tagName === "BUTTON"){
            const delProductId = parseInt(a.target.getAttribute('data-id'))
            
            // const delproduct = products.find(p => p.id === delProductId)
            deleteToCart(delProductId);
        }
    })

    function addToCart(product){
        cart.push(product);
        saveTask();
        renderCart();  
             
    }

    function renderCart(){
        cartItems.innerText="";
        let totalPrice = 0;
        if(cart.length){
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
           cart.forEach((item, index)=>{
            totalPrice = totalPrice+ item.price;
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="product-button" data-id="${item.id}">Delete</button>
            `;
            
            cartItems.appendChild(cartItem);
            totalPriceDisplay.textContent = `
            $${totalPrice.toFixed(2)};
            `
           })
           saveTask()
        }else{
            emptyCartMessage.classList.remove('hidden');
            totalPriceDisplay.textContent = '$0.00';
            saveTask()
        }
    }

    

    function deleteToCart(delProductId){   
        let indexToRemove = cart.findIndex(obj => obj.id === delProductId);
        if (indexToRemove !== -1) {
            cart.splice(indexToRemove, 1);
          }
          saveTask();
        renderCart();
    }

    checkOutBtn.addEventListener('click', ()=>{
        cart.length= 0; //set len =0 empty
        alert("Checkout successfully");
        saveTask();
        renderCart();
    })

    function saveTask(){
        localStorage.setItem('cart', JSON.stringify(cart));
    
    }
    
});


