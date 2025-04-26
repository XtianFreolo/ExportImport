

let inventory = [];

export function addItem(name) {
    if (!inventory.includes(name)) {
        inventory.push(name);
        console.log(`${name} has been added to the inventory.`);
    } else {
        console.log(`${name} is already in the inventory.`);
    }

}

export function removeItem(name) {
    const index = inventory.indexOf(name);
    if (index > -1) {
        inventory.splice(index, 1);
        console.log(`${name} has been removed from the inventory`);
    } else {
        console.log(`${name} was not found in the inventory`);
    }
}

