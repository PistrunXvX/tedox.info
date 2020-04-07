<?php
	$message = $_POST['maile'];
	$message2 = $_POST['phonenumber'];

	mail('serwillow.wolfe@gmail.com', 'My Subject', "Почта: ".$message."\n", "Телефон: ".$message2."\n");
?>

