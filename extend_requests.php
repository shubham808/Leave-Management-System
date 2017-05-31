<?php 
	require('include/db_connect.php');
	$arr = $_POST['arr'];
	$type = $arr[0];
	
	if($type=='warden')
		$query="SELECT * FROM extend_requests WHERE s_status=1 && w_status=0 ";
	if($type=='supervisor')
		$query="SELECT * FROM extend_requests WHERE s_status=0";
	if($type=='security')
		$query="SELECT * FROM extend_requests WHERE so_status=0 ";
	
	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
 		echo json_encode($arr);

 	} else {
 		echo "Error";
 	}

?>