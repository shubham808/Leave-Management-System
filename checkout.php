<?php 

	require('include/db_connect.php');

	$application_id = $_POST['application_id'];

	$query = "SELECT * FROM leave_application WHERE application_id='$application_id'";
	$res=mysqli_query($db,$query);
	if($res){
		$arr1 = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
		
		if($arr1['s_status']==1&&$arr1['so_status']==1){
			$query="UPDATE leave_application SET on_leave=1 WHERE application_id = '$application_id'";
			$res=mysqli_query($db,$query);
			$time = time();
			$query = "INSERT INTO checkin (application_id,checkout) VALUES ('$application_id','$time')";
			$res=mysqli_query($db,$query);		
			echo "Approved";
		}
				
		else if($arr1['s_status']===-1||$arr1['w_status']===-1||$arr1['so_status']===-1)echo "Rejected";	
		
		else echo "Pending";
	}
?>