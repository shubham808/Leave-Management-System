<?php
	
	require('include/db_connect.php');

	$arr = $_POST['arr'];
	$query = "SELECT * FROM leave_application WHERE roll_number = '$arr[0]' ";
	$res = mysqli_query($db,$query);

	$k = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
	$arr[0] = $k['application_id'];
	$query = "INSERT INTO extend_requests (application_id,extend_date,reason,destination) VALUES ('$arr[0]','$arr[1]','$arr[2]','$arr[3]') ";
	$res = mysqli_query($db,$query);

	if($res){
		echo "requested";
	}
	else
		echo "Error";

 ?>