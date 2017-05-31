<?php 
	require('include/db_connect.php');

	$arr = $_POST['arr'];

	$type = $arr[0];
	$application_id = $arr[1];
	$date = $arr[2];
	$query = "DELETE FROM extend_requests WHERE application_id = '$application_id'";
	$res=mysqli_query($db,$query);

	$query="UPDATE leave_application SET till_date = '$date' WHERE application_id='$application_id'";
		
	$res=mysqli_query($db,$query);
 	if($res){
 		$arr1 = mysqli_fetch_all($res,MYSQLI_ASSOC);
 		echo json_encode($arr1);

 	} else {
 		echo "Error";
 	}
?>