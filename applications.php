<?php 
	require('include/db_connect.php');

	$query="SELECT * FROM leave_application WHERE s_status=1";
	 	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
 		echo json_encode($arr);

 	} else {
 		echo "Error";
 	}

?>