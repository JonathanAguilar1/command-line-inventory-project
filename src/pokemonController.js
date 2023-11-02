const { nanoid } = require('nanoid');
const pokeStore = require("../data/pokeStores.json");
const inform = console.log

function create(items, itemName) {
    const item = pokeStore.find((item) => item.name === itemName);

    if (item) {
        const newItem = {
            name: item.name,
            priceInCents: item.priceInCents,
            id: nanoid(4),
        };

        items.push(newItem);
        inform("An Item Has Been Added Into Your Item List");
        return items;
        } else {
        return inform("Item not found in pokeStore.");
    }
}

function destroy(items, itemName) {
    const index = items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        items.splice(index, 1);
        inform("Item Has Been Destroyed");
        return items;
    } else {
        return inform("No Item Found");
    }
}

function edit(items, itemName, newName, newPriceInCents) {
    const item = items.find((item) => item.name === itemName);
    if (item) {
        item.name = newName;
        item.priceInCents = parseInt(newPriceInCents); 
        return items;
    } else {
        return "No Items Found";
    }
}

function calculateTotalPrice(items) {
    let totalPrice = 0;

    for (const item of items) {
        totalPrice += item.priceInCents;
    }

    return totalPrice
}

module.exports ={
    create,
    destroy,
    edit,
    calculateTotalPrice 

} 