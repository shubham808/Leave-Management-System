<?php 

	require('include/db_connect.php');
	ob_start();
	session_start();
	$u=$_POST['arr'][0];
	$p=$_POST['arr'][1];

	
	
		$query="SELECT * FROM admin_login WHERE admin_id='$u' AND password='$p'";
		$res=mysqli_query($db,$query);
		if($res)
		{
			if(mysqli_num_rows($res))
			{
				$arr = mysqli_fetch_all($res,MYSQLI_ASSOC)[0];
				$_SESSION['hostel'] = $arr['hostel_number'];
				$_SESSION['type'] = $arr['type'];
				$_SESSION['roll_number'] = $u;
				echo json_encode($arr);
			}
			else
				echo "failed";			
		}
		


 ?>