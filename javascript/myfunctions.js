function go_to_up() {
    window.scrollBy(0, -99999);
}

function feedback_send() {
    alert("Your message succesfully sended!");
    var email = document.getElementById("email_adress").value;
    var message = document.getElementById("message_client").value;
    console.log("new message \n E-mail: " + email + "\n Message: " + message);
    //write_feedback("new message \n E-mail: "+email+"\n Message: "+message+"\n");
}

function order(pizza_id) {
    var phone = prompt("Enter your phone number:\n ex: +99891 123 45 67", "+998");
    if (pizza_id == 1) {
        var order_info = "Pizza id = 1 |" + phone;
        console.log(order_info);
    } else if (pizza_id == 2) {
        console.log("Pizza id = 2 | " + phone);
        console.log(order_info);
    } else if (pizza_id == 3) {
        console.log("Pizza id = 3 | " + phone);
        console.log(order_info);
    } else console.log("This is hacker!");
}

/* Только для Internet Explorer! на других не работает*/
/* Для записи заказов клиента*/
function write_orders(orders_info) {
    var filepath = "./orders.txt";
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var myfile = fso.CreateTextFile(filepath, true);
    myfile.writeln(orders_info);
}
/* Для записи отзывово через about-us.html*/
function write_feedback(feedback_info) {
    var filepath = "./feedback.txt";
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var myfile = fso.CreateTextFile(filepath, true);
    myfile.writeln(feedback_info_info);
}
