<?php
$postdata=file_get_contents("php://input");
$request=json_encode($postdata);
$name=$request->name;
$email=$request->email;
$phone=$request->phone;
$feedback=$request->feedback;

$port=3306;
$socket="";
$user="root";
$password="chanderkote17";
$dbname="feedback";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

$sql="INSERT INTO feedback (name,email,phone,feedback) VALUES ($name,$email,$phone,$feedback)";

if($con->query($sql) === TRUE)
	echo "New record created successfully";
else
	echo "Error: ". $sql ."<br>" . $con->error; 
$con->close();
?>