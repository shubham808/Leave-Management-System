<?php 
	require('include/db_connect.php');
	$roll_number = $_POST['roll_number'];

	$query="SELECT * FROM leave_application WHERE roll_number ='$roll_number'";
	 	$res=mysqli_query($db,$query) ;
 	if($res){
 		if (mysqli_num_rows($res)) {
 			$arr = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
 			echo json_encode($arr);	
 		} else {
 		echo "Error";
 		}
 		
 	} else {
 		echo "Error";
 	}

?>