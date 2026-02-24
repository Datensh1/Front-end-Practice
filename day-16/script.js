let total_strip = document.getElementById("total_strip");
let pending_strip = document.getElementById("pending_strip");
let served_strip = document.getElementById("served_strip");
let customer_name = document.getElementById("customer_name");
let drink_select = document.getElementById("drink_select");
let size_select = document.getElementById("size_select");
let add_order = document.getElementById("add_order");
let reset_order = document.getElementById("reset_order");
let serve_order = document.getElementById("serve");
let orderList = [];
let total = 0;
let card_ctr = document.querySelector(".card_ctr");
function addOrder() {
  total = 0;
  let customerName = customer_name.value;
  let drinkSelect = drink_select.value;
  let sizeSelect = size_select.value;
  let card = document.createElement("div");
  const btn_list = document.createElement("div");
  card.id = "card";
  btn_list.id = "btn-list";
  if (customerName === "") {
    console.log("error");
  } else {
    let cardprop = [
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
    ];
    cardprop[0].textContent = "Customer: " + customerName;
    cardprop[1].textContent = "Drink: " + drinkSelect;
    cardprop[2].textContent = "Size: " + sizeSelect;
    for (let i = 0; i < cardprop.length; i++) {
      card.appendChild(cardprop[i]);
    }
    let btnList = [
      document.createElement("button"),
      document.createElement("button"),
    ];
    btnList[0].textContent = "Serve";
    btnList[0].id = "serve";
    btnList[1].textContent = "Cancel";
    btnList[1].id = "cancel";
    for (let i = 0; i < btnList.length; i++) {
      btn_list.appendChild(btnList[i]);
    }
    card_ctr.appendChild(card);
    card.appendChild(btn_list);
    orderList.push(drinkSelect);

    for (let i = 0; i < orderList.length; i++) {
      total += 1;
    }
    console.log(orderList);
   total_strip.textContent = 'Total Orders: ' + total
   pending_strip.textContent = 'Pending Orders: ' + total
  }

}
  function resetOrders(){
  total = 0
 for (let i = 0; i < orderList.length; i++) {
      total = 0;
    }
 total_strip.textContent = 'Total Orders: ' + total
}
reset_order.addEventListener("click",resetOrders)
add_order.addEventListener("click", addOrder);
