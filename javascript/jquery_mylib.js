$(document).ready(function () {
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $("#order_button").click(function () {
        var phone = "";
        phone = prompt("Pepperoni pizza\nВведите свой номер телефона для заказа", "+998");
        window.location.replace("/engine/order.php?phone="+phone+"&pizza_id=1");

    });
    $("#order_button2").click(function () {
        var phone = "";
        phone = prompt("Cheese pizza\nВведите свой номер телефона для заказа", "+998");
        window.location.replace("/engine/order.php?phone="+phone+"&pizza_id=2");

    });
    $("#order_button3").click(function () {
        var phone = "";
        phone = prompt("Pizza with Mushrooms\nВведите свой номер телефона для заказа", "+998");
        console.log("YES");
        window.location.replace("/engine/order.php?phone="+phone+"&pizza_id=3");

    });

    $("#support_button").click(function () {
        var _email = document.getElementById("email_adress").value;
        var message = document.getElementById("message_client").value;
        if (_email != "" && message != "") {
            alert("Ваше обращение успешно отправлено. Ждите ответа на указанный вами E-MAIL")
            window.location.replace("/engine/feedback.php?email="+_email+"&message="+message);
        } else {
            alert("Ошибка. Заполните все поля!")
        }

    });

    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
    
});
/*Preloader*/

