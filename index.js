
function addAmount () {
    
}

function minuAmount () {

}

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

                const addBtn = document.createElement('button');
                const minusBtn = document.createElement('button');
                const amount = document.createElement('span');
                addBtn.innerText = '+';
                minusBtn.innerText = '-';
                amount.innerText = '* 1';

                const itemName = document.createElement('div');
                itemName.innerText = name;
                const itemPrice = document.createElement('div');
                itemPrice.classList.add('price');
                itemPrice.innerText = price;
                li.dataset.name = name;
                li.append(addBtn, minusBtn, itemName, amount, itemPrice);
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