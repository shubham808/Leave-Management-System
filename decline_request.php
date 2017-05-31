<?php 
	require('include/db_connect.php');

	$arr = $_POST['arr'];

	$type = $arr[0];
	$application_id = $arr[1];
	$date = $arr[2];
	$query = "DELETE FROM extend_requests WHERE application_id = '$application_id'";
	
?>