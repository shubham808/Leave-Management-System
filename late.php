
<?php
require('include/db_connect.php');
	
	
 	$query="SELECT * FROM leave_application WHERE on_leave=1 ORDER BY till_date";
 	$arr1=[];
 	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
 		foreach ($arr as $item) {
 			$till = strtotime($item['till_date']);
 			$due = $till - time();
 			if($due<0){
 				$r=$item['roll_number'];
 				$query="SELECT * FROM student_data WHERE student_id='$r'";
 				$res=mysqli_query($db,$query) ;
 				$arr2 = mysqli_fetch_all($res,MYSQLI_ASSOC);
 				

 				$item = array_merge($item,$arr2[0]);
 				
 				array_push($arr1, $item);
 			}
 		}
 		echo json_encode($arr1);

 	} else {
 		echo "Error";
 	}
 	

?>





