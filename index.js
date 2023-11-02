const { readJSONFile, writeJSONFile } = require('./src/helpers.js');

const { calculateTotalPrice, create, destroy, edit } = require("./src/pokemonController"); 

const pokeStore = readJSONFile("./data", "pokeStores.json")

const itemList = readJSONFile("./data", "itemList.json")

const inform = console.log;

function run() {
    const action = process.argv[2];
    const item = process.argv[3];
    let writeToFile = false;
    let updatedItem = [];

    switch (action) {
        case "create":
            updatedItem = create(itemList, item);
            writeToFile = true;
            break;
        case "itemList":
            itemList.forEach((item) => {
            inform(`Name: ${item.name} Price: ${item.priceInCents} Id: ${item.id}`);
            });
            break;
        case 'pokeStore':
            pokeStore.forEach((item) => {
            inform(`Name: ${item.name} Price: ${item.priceInCents} Id: ${item.id}`);
            })
            break;
        case "destroy":
            destroy(itemList, item);
            writeToFile = true;
            break;
        case "edit":
            const newName = process.argv[4];
            const newPriceInCents = process.argv[5];
            updatedItem = edit(itemList, item, newName, newPriceInCents);
            writeToFile = true;
            break;
        case 'totalPrice':
            const totalCents = calculateTotalPrice(itemList);
            inform(`Total Price of Items in itemList: ${totalCents}`);
            break;
    default: 
    inform('There is an error.')
    }
        if (writeToFile) {
        writeJSONFile("./data", "itemList.json", itemList)
    }
}
run();