
<?php
require('include/db_connect.php');

	$arr = $_POST['arr'];

	if($arr[0]=='warden')
 		$query="UPDATE leave_application SET w_status=-1 WHERE application_id = '$arr[1]'";
 	
 	if($arr[0]=='supervisor')
 		$query="UPDATE leave_application SET s_status=-1 WHERE application_id = '$arr[1]'";
 	
 	if($arr[0]=='security')
 		$query="UPDATE leave_application SET so_status=-1 WHERE application_id = '$arr[1]'";
 	

 	$res=mysqli_query($db,$query);
 	if($res){
 		echo $arr[0];
 	}else {
 		echo "Error";
 	}
 	
 
?>





