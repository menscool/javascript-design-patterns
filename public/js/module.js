const shoppingBasket = (() => {
  const items = [];

  const getTotalPrice = () =>
    items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

  const getCount = () => items.reduce((acc, { quantity }) => acc + quantity, 0);

  const addToBasket = ({ name, price, quantity = 1 }) =>
    items.push({ name, price, quantity });

  return { getTotalPrice, getCount, addToBasket };
})();

console.log(shoppingBasket.getTotalPrice()); // 0
console.log(shoppingBasket.getCount()); // 0
shoppingBasket.addToBasket({ name: "Apple", price: 0.5 });
shoppingBasket.addToBasket({ name: "Orange", price: 0.8, quantity: 3 });
shoppingBasket.addToBasket({ name: "Banana", price: 0.3, quantity: 5 });
console.log(shoppingBasket.getTotalPrice()); // 4.4
console.log(shoppingBasket.getCount()); // 9
