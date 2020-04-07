<?php
$message = $_POST['maile'];
$message2 = $_POST['phonenumber'];
mail('serwillow.wolfe@gmail.com', 'My Subject', $message, $message2);
?>

