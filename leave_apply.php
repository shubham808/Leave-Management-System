
<?php
require('include/db_connect.php');

        $arr=$_POST['arr'];
		$date = time();
 	$query="INSERT INTO leave_application (roll_number,from_date,till_date,address,reason,item_details,application_date,hostel) VALUES ('$arr[0]','$arr[1]','$arr[2]','$arr[3]','$arr[4]','$arr[5]','$date','$arr[6]')";
 	$res=mysqli_query($db,$query);
 	if($res){
 		 echo json_encode($arr);
 	}else {
 		echo "failed";
 	}
   
?>





