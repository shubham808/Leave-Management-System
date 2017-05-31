<?php 
	require('include/db_connect.php');


	$roll_number = $_POST['roll_number'];
		
	$query="SELECT * FROM student_data WHERE student_id = '$roll_number'";
	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
 		echo json_encode($arr);

 	} else {
 		echo "Error";
 	}

?>