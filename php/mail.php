
<?php

$message = "$_POST";


$message = wordwrap($message, 70, "\r\n");

// Отправляем
mail('serwillow.wolfe@gmail.com', 'My Subject', $message);
?>
