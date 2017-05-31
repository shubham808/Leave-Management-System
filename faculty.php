
<?php
require('include/db_connect.php');

 	$query="SELECT * FROM faculty_data WHERE 1";
 	
 	$res=mysqli_query($db,$query) ;
 	if($res){
 		$arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
 		

 	} else {
 		echo "Error";
 	}
 	for ($i=0; $i < sizeof($arr) ; $i++) { 
 		$a=$arr[$i]['faculty_id'];
 		
 		$query="SELECT * FROM course_data WHERE faculty_id='$a'";
 	
	  	$res=mysqli_query($db,$query) ;
 	 	if($res){
 	 		$arr2=mysqli_fetch_all($res,MYSQLI_ASSOC);
	 		for ($j=0; $j < sizeof($arr2); $j++) { 
	  			$arr1 = array(
	  				'course_id'.$j.$a => $arr2[$j]['course_id'],
	  				'course_name'.$j.$a => $arr2[$j]['course_name']  
	  				);
	  			$arr[$i] = array_merge($arr[$i],$arr1);
	 		}
	  		$arr1 = array('number_of_courses' => $j );
	  		$arr[$i] = array_merge($arr[$i],$arr1);
			
 			}

 	 	}
 	
 	
 	echo json_encode($arr);

?>





