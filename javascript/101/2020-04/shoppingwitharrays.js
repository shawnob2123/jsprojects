let shoppingStore = ["Gucci", "Louis Vuitton", "Chanel", "Versace"];
let storeItemPrice = [ 500, 650, 750, 1000];
let myActions = ("I bought");


for (let i = 0; i < shoppingStore.length; i++){
    console.log(`${myActions} ${shoppingStore[i]} for $${storeItemPrice[i]}`);
}

