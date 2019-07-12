<?php
	
	$port=3306;
	$socket="";
	$user="root";
	$password="";
	$dbname="feedback";
	$host="localhost";

	$con =mysqli_connect($host, $user, $password, $dbname, $port);

	$data=json_decode(file_get_contents('php://input'));
	if(count($data)>0)
	{
		$name = mysqli_real_escape_string($con,$data->name);
		$email = mysqli_real_escape_string($con,$data->email);
		$phone = mysqli_real_escape_string($con,$data->phone);
		$feedbacks = mysqli_real_escape_string($con,$data->feedbacks);
		$sql="INSERT INTO feedback (name,email,phone,feedback) VALUES ('$name' ,'$email' ,'$phone' ,'$feedbacks')";
		if(mysqli_query($con,$sql))
		{
			echo "New record created successfully";
		}
		else{
			echo "Error: ". $sql ."<br>" . $con->error; 
		}
	}
	
	$con->close();
?>