// Elements
const inventoryForm = document.getElementById('inventory-form');
const inventoryList = document.getElementById('inventory-list');

// Inventory array to hold items
let inventory = [];

// Add item to inventory
inventoryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value, 10);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice,
        total: itemQuantity * itemPrice,
    };

    inventory.push(newItem);
    displayInventory();
    inventoryForm.reset();
});

// Display inventory items in the table
function displayInventory() {
    inventoryList.innerHTML = '';

    inventory.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${item.total.toFixed(2)}</td>
            <td><button class="delete" onclick="deleteItem(${item.id})">Delete</button></td>
        `;

        inventoryList.appendChild(row);
    });
}

// Delete item from inventory
function deleteItem(id) {
    inventory = inventory.filter(item => item.id !== id);
    displayInventory();
}
