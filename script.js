(function () {
  var results = document.getElementById("results");
  results.innerHTML = "Your Cart is Empty";
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("cart-hplus")
      .addEventListener("submit", estimateTotal);

    function estimateTotal(event) {
      event.preventDefault();
      var itemFriedCheese =
        parseInt(document.getElementById("txt-fried-cheese").value, 10) || 0;
      var itemHotPeppers =
        parseInt(document.getElementById("txt-hot-peppers").value, 10) || 0;
      var itemBoard =
        parseInt(document.getElementById("txt-board").value, 10) || 0;
      var itemCheesePizza =
        parseInt(document.getElementById("txt-pizza-cheese").value, 10) || 0;
      var itemHillPizza =
        parseInt(document.getElementById("txt-pizza-hill").value, 10) || 0;
      var itemMeatLover =
        parseInt(document.getElementById("txt-meat-lover").value, 10) || 0;
      var shippingMethod =
        document.querySelector("[name=method]:checked").value || "";

      var totalQty =
          itemFriedCheese +
          itemHotPeppers +
          itemBoard +
          itemCheesePizza +
          itemHillPizza +
          itemMeatLover,
        shippingCost,
        estimate,
        totalItemPrice =
          7 * itemFriedCheese +
          5 * itemHotPeppers +
          20 * itemBoard +
          10 * itemCheesePizza +
          10 * itemHillPizza +
          15 * itemMeatLover;

      switch (shippingMethod) {
        case "Delivery":
          shippingCostPer = 1;
          break;
        default:
          shippingCostPer = 0;
          break;
      }

      shippingCost = 5 * shippingCostPer;

      estimate = "$" + (totalItemPrice + shippingCost).toFixed(2);

      document.getElementById("txt-estimate").value = estimate;

      results.innerHTML = "Number of items: " + totalQty + "<br>";
      results.innerHTML +=
        "Shipping: $" +
        shippingCost.toFixed(2) +
        "<br>" +
        "Total: " +
        estimate +
        "<br>" +
        "<form action=/action_page.php>";
      ("<label for=fname>First name:</label>");
      ("<input type=text id=fname name=fname><br><br>");
      ("<label for=lname>Last name:</label>");
      ("<input type=text id=lname name=lname><br><br>");
      ("<input type=submit value=Submit>");
      ("</form>");
      console.log(estimate);
    }
  });
})();
