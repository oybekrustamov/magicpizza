<?php 
$number = $_GET['phone'];
$pizza_id = $_GET['pizza_id'];
if($phone!=""){
    mail("order@example.com","Pizza zakaz!!!","Pizza ID = ".$pizza_id."\n Phone = ".$number);
    header('Location: /index.php ');
}

else {
    header('Location: /index.php ');
}

?>