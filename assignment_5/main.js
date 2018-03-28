//creates and enables dynamic message that comes up when product qty changes
$( document ).ready(function() {
          $('.group').hide();
      $('#1').show();
      $('#bunNum').change(function () {
        $('.group').hide();
        $('#'+$(this).val()).show();
      })
});

$( document ).ready(function() {

//builds portal for checkout page via table
    function cartPage(){
        var table = "";
        var cart = JSON.parse(localStorage.getItem("CartInventory"));
        for (var i = 0; i < cart.items.length; i++){
            table += `<tr>
            <td>Wacky Walnut, ${ cart.items[i].flavors.join(' ') }</td>
            <td>${cart.items[i].quantity}</td>
            <td>${cart.items[i].quantity} x $6.99</td>
            <td><button data-place="${i}" class="remove">Remove</button></td></tr>`;
        }
        return table;
    }

//determines whether or not items are in the cart and retrieves their info
    function cartStatus(){
        $('#cartTable').append(cartPage());
        $(".remove").click( function(event) {
            var index = event.target.getAttribute("data-place");
            event.target.parentElement.parentElement.remove();
            removeItem(index);
        });
    }

//using the developer tools to check if items are being added to CartInventory
    function checkLocalStorage(){
        if (localStorage.CartInventory === undefined){
            localStorage.setItem("CartInventory", JSON.stringify({items: []}));
        } else{
            cartMenu(JSON.parse(localStorage.getItem("CartInventory")));
        }
    }

    var checkbox = `
                    <br>
                    <p>Glazing<p>
                        <input type="checkbox" name="None">None<br>
                        <input type="checkbox" name="Sugarmilk">Sugarmilk<br>
                        <input type="checkbox" name="Vanilla">Vanilla<br>
                        <input type="checkbox" name="Double Chocolate">Double Chocolate<br>
                    `

    $('#bunNum').on('change', function(e) {
        var quantity = $('#bunNum').find(":selected").text();
        if (quantity > '1 Roll') {
            $('#glaze').html(checkbox);
            var limit = 1;
            $('input[type=checkbox]').on('change', function (e) {
                if ($('input[type=checkbox]:checked').length > limit) {
                    $(this).prop('checked', false);
                    alert("Only one glaze is allowed!");
                }
            });
        }
    });

    function addItemToCart(item) {
        if (localStorage.CartInventory === undefined) {
            localStorage.setItem("CartInventory", JSON.stringify({items: []}));
        }
        var cart = JSON.parse(localStorage.getItem("CartInventory"));
        cart.items.push(item);
        localStorage.setItem("CartInventory", JSON.stringify(cart));
        cartMenu(cart);
    }

    //allows for ordering of products thru add to cart button
    $( ".order" ).click(function() {
        var items =[];
        $('input[type=checkbox]:checked').toArray().forEach(function(v) {
            items.push(v.name);
        });
        var quantity = $('#bunNum').find(":selected").text();
        addItemToCart({flavors: [items], quantity: quantity});
    });

    //updates cart in menu
    function cartMenu(cart){
        var count = cart.items.length
        $('#cartNav').replaceWith('<span id="cartNav"> Cart: ' + count + '</span>');
    }

    //gets rid of item
    function removeItem(i) {
        var cart = JSON.parse(localStorage.getItem("CartInventory"));
        cart.items.splice(i, 1);
        localStorage.setItem("CartInventory", JSON.stringify(cart));
        cartMenu(cart);
        location.reload();
    }

    checkLocalStorage();
    cartStatus();
});
