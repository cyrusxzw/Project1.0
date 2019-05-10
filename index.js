function updateListItemPriceByNewAmount() {

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
                amount.className = 'amount';
                let amountNumber = 1;
                li.dataset.amount = amountNumber;
                addBtn.innerText = '+';
                addBtn.onclick = () => {
                    let {total:totalPrice} = total.dataset;
                    li.dataset.amount = parseInt(li.dataset.amount) + 1;
                    let newAmount = li.dataset.amount;
                    li.querySelector('.amount').innerText = `* ${newAmount}`;
                    let newPrice = price * newAmount;
                    li.querySelector('.price').innerText = newPrice;
                    const newTotalPrice = +totalPrice + +price;
                    total.innerText = `$ ${newTotalPrice}`;
                    total.dataset.total = newTotalPrice;
                };
                minusBtn.innerText = '-';
                minusBtn.onclick = () => {
                    let {total:totalPrice} = total.dataset;
                    let newAmount = +li.dataset.amount -1;
                    if (newAmount == 0){
                        topping.onclick();
                        return;
                    }
                    li.dataset.amount = newAmount;
                    li.querySelector('.amount').innerText = `* ${newAmount}`;
                    let newPrice = price * newAmount;
                    li.querySelector('.price').innerText = newPrice;
                    const newTotalPrice = +totalPrice - +price;
                    total.innerText = `$ ${newTotalPrice}`;
                    total.dataset.total = newTotalPrice;
                };
                amount.innerText = `* ${amountNumber}`;
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