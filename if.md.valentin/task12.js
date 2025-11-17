function canIGet(item, money) {
  const prices = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1,
  };

  if (!prices.hasOwnProperty(item)) {
    return false;
  }

  const itemPrice = prices[item];
  return money >= itemPrice;
}

console.log(canIGet(`Mac Pro`, 1000));
