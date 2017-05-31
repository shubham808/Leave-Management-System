<?php 
	require('include/db_connect.php');


	$arr = $_POST['arr'];
	$type = $arr[0];
	$hostel = $arr[1];
	if($type==='warden')
		$query="SELECT * FROM leave_application WHERE w_status=-1 && hostel = '$hostel'";
	if($type==='supervisor')
		$query="SELECT * FROM leave_application WHERE s_status=-1 && hostel = '$hostel'";
	if($type==='security')
		$query="SELECT * FROM leave_application WHERE so_status=-1 ";
	
	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
 		echo json_encode($arr);

 	} else {
 		echo "Error";
 	}

?>