const productsData = {
    'Електроніка': [
        { name: 'Смартфон', price: '1200$' },
        { name: 'Пральна машина', price: '1500$' },
        { name: 'Ігрова приставка', price: '2000$'}
    ],
    'Одяг': [
        { name: 'Футболка', price: '20$'},
        { name: 'Кепка', price: '15$'},
        { name: 'Кеди', price: '50$'}
    ], 
    'Книги': [
        { name: 'Роман', price: '5$'},
        { name: 'Детектив', price: '3$'},
        { name: 'Література', price: '6$'}
    ]
};

function showProducts(category) {
    let productList = document.getElementById ('product-list')
    productList.innerHTML = '';

    if (productsData.hasOwnProperty(category)) {
        let products = productsData[category];

        for (let i = 0; i < products.length; i++) {
            let product = products[i]; 
            let li = document.createElement('li');
            li.innerHTML = product.name;
            li.onclick = function() {
                showProductDetails(product);
            };
            productList.appendChild(li);
        }
    }
}

function showProductDetails(product) {
    let productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '<strong>Назва:</strong>' + product.name + '<br><strong>Ціна:</strong>' + product.price;
}

function showOrderForm () {
    let orderForm = document.getElementById('order-form');
    orderForm.style.display = 'block';
}

function submitOrderForm(event) {
    event.preventDefault();

    let customerName = document.getElementById('customer-name').value
    let city = document.getElementById('city').value
    let deliveryPoint = document.getElementById('delivery-point').value
    let paymentMethod = document.getElementById('payment-method').value
    let quantity = document.getElementById('quantity').value
    let comment = document.getElementById('comment').value

    if (customerName && city && deliveryPoint && paymentMethod && quantity) {
        let orderDetails = {
            customerName: customerName,
            city: city,
            deliveryPoint: deliveryPoint,
            paymentMethod: paymentMethod,
            quantity: quantity,
            comment: comment
        }
        displayOrderDetails(orderDetails);
        resetState();
    } else {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми.');
    }
}

function displayOrderDetails(orderDetails) {
    let productDetails = document.getElementById('product-details');
    let orderInfo = document.createElement('div');
    orderInfo.innerHTML = `
        <h3>Інформація про замовлення:</h3>
        <p><strong>Назва товару:</strong> ${productDetails.innerHTML}</p>
        <p><strong>Ціна:</strong> ${productDetails.innerHTML}</p>
        <p><strong>ПІБ покупця:</strong> ${orderDetails.customerName}</p>
        <p><strong>Місто:</strong> ${orderDetails.city}</p>
        <p><strong>Склад Нової пошти для надсилання:</strong> ${orderDetails.deliveryPoint}</p>
        <p><strong>Спосіб оплати:</strong> ${orderDetails.paymentMethod}</p>
        <p><strong>Кількість продукції:</strong> ${orderDetails.quantity}</p>
        <p><strong>Коментар до замовлення:</strong> ${orderDetails.comment}</p>
    `;

    let productInfo = document.getElementById('product-info');
    productInfo.appendChild(orderInfo);
}

function resetState() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    let productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '';

    let buyButton = document.getElementById('buy-button');
    buyButton.style.display = 'none';

    let orderForm = document.getElementById('order-form');
    orderForm.style.display = 'none';
}

