<?php 
$email = $_GET['email'];
$msg = $_GET['message'];
if($phone!=""){
    mail("rustamovoa1999@gmail.com","New support mail","e-mail: ".$email."\nMessage: ".$msg);
    header('Location: /index.php ');
}
else {
    header('Location: /index.php ');
}
?>