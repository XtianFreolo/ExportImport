alert("Its working sire");


import { addItem, removeItem, listItems } from './inventory.js';

addItem("Laptop");
addItem("SmartPhone");
addItem("Headphones");

removeItem("SmartPhone");

listItems();