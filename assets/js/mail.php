<?php
//to be included when any of the 3 admins click confirm
if($s_status==1&&$w_status==1&&$so_status==1)
{
	$query="SELECT faculty_id FROM course WHERE year = '" . $year . "';";
	$res=mysql_query($query);
	while($fac==mysql_fetch_assoc($res))
	{
		$q="SELECT email_id FROM faculty WHERE id=' $fac['faculty_id']'";
		$ans=mysql_query($q);
		while($row=mysql_fetch_assoc($ans))
		{
			$to = $row['email_id'];
			$subject = "Leave application";
			$txt = "Respected Sir\nThis is to inform you that student '$name' of ' $year ' will be officialy on leave from ' $from_date ' till '$till_date 'Kindly note the same and excuse their absence. \n";
			$headers = "From: " . $from_email . "" . "\r\n";

			mail($to,$subject,$txt,$headers);
		}
	}
}
?>