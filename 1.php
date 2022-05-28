<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$message = "A message from ".$name.", from the email ".$email.", stating ".$msg;
mail("rs@crio77.com", "Message on CriO77.com", $message);
header("refresh: 3;url=/contact");
echo '<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title>Thank you '.$name.'</title>
	<link rel="shortcut icon" href="./img/logo round white.png" type="image">
	<link rel="stylesheet" href="./css/style.css">
</head>
<body>
	<section>
		<div class="color"></div>
		<div class="color"></div>
		<div class="color"></div>
		<div class="box">
			<div class="square" style="--i:0;"></div>
			<div class="square" style="--i:1;"></div>
			<div class="square" style="--i:2;"></div>
			<div class="square" style="--i:3;"></div>
			<div class="square" style="--i:4;"></div>
		<div class="container">
			<div class="form">
				<h2>Thank you '.$name.'</h2>
				<p class="forget">Your message will help us become charged up and give us the feeling that there are people watching us giving our best.</p>
		    	<div class="inputbox">
					<button><a href="/contact">Go Back</a></button>
				</div>
				<p class="forget">Want to go to home page ? <a href="/">Click Here</a></p>
		</div>
	</div>
  </div>
   </section>
</body>
</html>';