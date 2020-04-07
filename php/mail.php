
<?php
	if(isset($_POST['submit'])){
		$name=$_POST['maile'];
		$phone=$_POST['phonenumber'];

		$to='serwillow.wolfe@gmail.com';
		$subject='Проверка формы';
		$message="Mail: ".$name."\n"."Phone: ".$phone."\n";
	}
?>








