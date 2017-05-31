
<?php
require('include/db_connect.php');
	
	$application_id=$_POST['application_id'];
 	$query="SELECT * FROM leave_application WHERE application_id='$application_id'";
	 	$res=mysqli_query($db,$query) ;
	 	if($res){
	 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
	 		echo json_encode($arr);
	 	} else {
	 		echo "Error";
	 	}

 	

?>





