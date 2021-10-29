function order(...drinks) {
  let price = 0;
  let str = "Ваш заказ: ";
  let sum = 0;

  for (let i = 0; i < drinks.length; i++) {
    switch (drinks[i]) {
      case "эспрессо":
        price = 20;
        break;
      case "капучино":
        price = 23;
        break;
      case "латте":
        price = 35;
        break;
      case "горячий шоколад":
        price = 28;
        break;
    }
    str += drinks[i] + " : " + price + "; ";
    sum += price;
  }
  str += " Общая сумма заказа : " + sum;
  return str;
}

const myOrder = order("эспрессо", "латте");
console.log(myOrder);
document.write(myOrder);
