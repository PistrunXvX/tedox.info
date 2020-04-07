
<?php
	
	$milo = htmlspecialchars($_POST['email']);
	#$message;
	#$message = wordwrap($message, 70, "\r\n");

mail('serwillow.wolfe@gmail.com', 'My Subject', $milo);
?>








