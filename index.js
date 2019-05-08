
function pickTopping() {
    const toppings = document.querySelectorAll('.toppings-container');
    const summary = document.querySelector('.summary-container');
    const total = document.querySelector('.total');
    toppings.forEach((topping) => {
        const { name, price } = topping.dataset;
        topping.onclick = () => {
            let {total:totalPrice} = total.dataset;
            if (!topping.classList.contains('active')) {
                topping.classList.add('active');
                const li = document.createElement('li');
                const itemName = document.createElement('div');
                itemName.innerText = name;
                const itemPrice = document.createElement('div');
                itemPrice.classList.add('price');
                itemPrice.innerText = price;
                li.dataset.name = name;
                li.append(itemName, itemPrice);
                summary.append(li);
                totalPrice = parseFloat(totalPrice) + parseFloat(price);
            }
            else { 
                topping.classList.remove('active');
                summary.querySelector(`[data-name="${name}"]`).remove();
                totalPrice = parseFloat(totalPrice) - parseFloat(price);
            }
            total.dataset.total = totalPrice;
            total.innerText = `Total: $${totalPrice}`;
            
        }
    });
}

function main () {
    pickTopping();
}


window.addEventListener('DOMContentLoaded', main);