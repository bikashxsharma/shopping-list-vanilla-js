const items = [
  {
    id: 1,
    name: "Food twenty 5",
    price: 5.50,
    description: "This is made of silver"
  },
  {
    id: 2,
    name: "Chopping Samosa ",
    price: 15.50,
    description: "Biscuits are the good goose"

  },
  {
    id: 3,
    name: "Happy sandwich",
    price: 9.80,
    description: "Susmando tu rages chess"

  },
  {
    id: 4,
    name: "Japarta Hultan",
    price: 11.20,
    description: "Suskchyangtu haklal"

  },
  {
    id: 5,
    name: "Hawai safari",
    price: 51.50,
    description: "Luxurious food in the go"

  },

]
const itemLists = document.getElementById('item-list')
const cartLists = document.getElementById('cart-list')
const totalPrice = document.getElementById('total-price')



// create item element function
const createItem = (item) => {
  const itemDiv = document.createElement('div')

  itemDiv.className = `item item-${item.id}`
  if (item) {
    itemDiv.innerHTML = `<div class="detail"><h3>${item.name}</h3>
                  <p>${item.description}</p>
              </div>
              <div class="price">
                  ${item.price} €
              </div>
              <button id='add-to-cart' class="addItemToCart" data-id=${item.id}>Add to cart</button>`;

  }
  return itemDiv;
}

// iterate items according to Array items
items.map((item) => {
  itemLists.appendChild(createItem(item))
})

// calculateTotal sum
let sum = 0;
const getSum = (price) => {
  return sum = sum + price
}

// event handler for add to car button
const addToCartBtns = document.querySelectorAll(".addItemToCart");
addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    addItemToCart(btn.getAttribute('data-id'))
  })
})


// add items to cart
function addItemToCart(id) {
  const filteredItem = items.filter(item => item.id.toString() === id);
  const itemDiv = document.createElement('div')
  itemDiv.className = `itemcart_item fade-in cart_item_id-${filteredItem[0].id}`
  itemDiv.innerHTML = ` <h3>${filteredItem[0].name}</h3>
          <div class="price"> ${filteredItem[0].price} €</div>
         <button class="removeItemFromCart" data-id=${filteredItem[0].id} price=${filteredItem[0].price}> <i class="fas fa-trash-alt" ></i></button>`;
  cartLists.appendChild(itemDiv)
  totalPrice.innerText = getSum(filteredItem[0].price)
  const removeFromCartBtns = document.querySelectorAll(".removeItemFromCart");
  if (removeFromCartBtns.length > 0) {
    removeFromCartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')
        const price = btn.getAttribute('price')
        removeItem(id, price)
      })
    })
  }
}



//remove item from cart
const removeItem = (id, price) => {
  const delDiv = document.querySelector(`.cart_item_id-${id}`)
  delDiv.parentNode.removeChild(delDiv)
  totalPrice.innerText = getSum(-price)
}