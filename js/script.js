// JavaScript source code
document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunction);
	
//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//sticky navbar
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});

// ORDER {{{

function order(field, id) {
    var radioDeliver = document.getElementsByName(field);

    if ((radioDeliver[1].checked)) {
        $(id).show();
    }
    else {
        $(id).hide();
    }
}

// }}}

// VALIDATE {{{

function validate_register() {
    var email = $("#email").val();
    var password = $("#password").val();
    var full_name = $("#full_name").val();
    var username = $("#username").val();

    var errMsg = "";								/* create variable to store the error message */
    var result = true;								/* assumes no errors */
    var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */

    if (username == "") {
        errMsg += "Username cannot be empty.\n";
    }

    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }

    if (password.length < 9) {
        errMsg += "Password must be at least 8 characters long\n";
    }

    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;
}

function validate_order() {
    var delivery_type_pickup = $("#delivery_type_pickup").prop("checked");
    var delivery_type_delivery = $("#delivery_type_delivery").prop("checked");

    var delivery_address = $("#delivery_address").val();
    var delivery_suburb = $("#delivery_dist").val();
    var delivery_postcode = $("#delivery_postcode").val();

    var billing_address = $("#billing_address").val();
    var billing_suburb = $("#billing_dist").val();
    var billing_postcode = $("#billing_postcode").val();

    var pizza_order = $("#pizza_order").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    var payment_type_pickup = $("#payment_type_pickup").prop("checked");
    var payment_type_online = $("#payment_type_online").prop("checked");

    var full_name = $("#full_name").val();
    var cardno = $("#cardno").val();
    var ccmon = $("#ccmon").val();
    var ccyear = $("#ccyear").val();
    var cvv = $("#cvv").val();

    var genm  = $("#genm").prop("checked");
    var genf  = $("#genf").prop("checked");

    var errMsg = "";								/* create variable to store the error message */
    var result = true;								/* assumes no errors */
    var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */

    /* Rule 1, check if all required date are entered */

    // Check Delivery
    if ((delivery_type_delivery)) {
        if (delivery_address == "") {
            errMsg += "Delivery Address cannot be empty.\n";
        }

        if (delivery_dist == "") {
            errMsg += "Delivery District cannot be empty.\n";
        }

        if (delivery_postcode == "") {
            errMsg += "Delivery PostCode cannot be empty.\n";
        }

        if (delivery_postcode.length != 6) {
            errMsg += "Delivery Post code must be 6 digits long.\n";
        }
    }

    if (billing_address == "") {
        errMsg += "Billing Address cannot be empty.\n";
    }

    if (billing_dist == "") {
        errMsg += "Billing District cannot be empty.\n";
    }

    if (billing_postcode == "") {
        errMsg += "Billing PostCode cannot be empty.\n";
    }

    if (billing_postcode.length != 6) {
        errMsg += "Billing Post code must be 6 digits long.\n";
    }

    if (pizza_order == "") {
        errMsg += "Pizza Order cannot be empty.\n";
    }

    if ((!delivery_type_pickup) && (!delivery_type_delivery)) {
        errMsg += "A Delivery type must be selected.\n";
    }

    if ((!payment_type_pickup) && (!payment_type_online)) {
        errMsg += "A Payment type must be selected.\n";
    }

    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    

    return result;
}

function payment(cardlb, id) {
    var radioDeliver = document.getElementsByName(cardlb);
    if (document.getElementById('visa').checked)
        if (cardno.value.length > 16) {
            cardno.value = cardno.value.slice(0, 16);
        }
}
        


function sada() {
    var valueToCopy = $("#delivery_address").val();
    $("#billing_address").val(valueToCopy);

    var valueToCopy = $("#delivery_dist").val();
    $("#billing_dist").val(valueToCopy);

    var valueToCopy = $("#delivery_postcode").val();
    $("#billing_postcode").val(valueToCopy);
}

function sadaalert() {
    var delivery_address = $("#delivery_address").val();
    var delivery_dist = $("#delivery_dist").val();
    var delivery_postcode = $("#delivery_postcode").val();
    var errMsg = "";								/* create variable to store the error message */
    var result = true;								/* assumes no errors */
    var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */

    if (delivery_address == "") {
        errMsg += "Delivery Address cannot be empty.\n";
    }

    if (delivery_dist == "") {
        errMsg += "Delivery District cannot be empty.\n";
    }

    if (delivery_postcode == "") {
        errMsg += "Delivery PostCode cannot be empty.\n";
    }

    if (delivery_postcode.length != 6) {
        errMsg += "Delivery Post code must be 6 digits long.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
}

function init() {
    scroll();
    
    $("#regform").submit(validate_order);
    $("#regform2").submit(validate_register);
}


function cc_1() {
    var visa = $("#visa").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (visa.length != 16) {
        errMsg += "VISA is selected and must be 16 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 16)

    return false;
}

function cc_2() {
    var visa = $("#mc").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (mc.length != 16) {
        errMsg += "Master Card is selected and must be 16 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 16)

    return false;
}

function cc_3() {
    var visa = $("#amex").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (amex.length != 15) {
        errMsg += "American Express is selected and must be 15 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 15)

    return false;
}