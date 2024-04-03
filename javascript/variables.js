let cartQuantity = 0;
function quantityBtn() {
  console.log(`Cart quantity: ${cartQuantity}`);
}
function addCartBtn() {
  cartQuantity++;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function add2Btn() {
  cartQuantity += 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function add3Btn() {
  cartQuantity += 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function removeCartBtn() {
  cartQuantity--;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function remove2Btn() {
  cartQuantity -= 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function remove3Btn() {
  cartQuantity -= 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function add4Btn() {
  cartQuantity += 4;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function add5Btn() {
  cartQuantity += 5;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function resetBtn() {
  cartQuantity = 0;
  console.log("Cart was reset.");
  console.log(`Cart quantity: ${cartQuantity}`);
}
