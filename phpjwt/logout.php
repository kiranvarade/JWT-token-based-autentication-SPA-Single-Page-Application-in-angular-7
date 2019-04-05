<?php
 include "./db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data_send = json_decode(file_get_contents('php://input'));

	$sql = "SELECT  * from users_tbl WHERE token='$data_send->token'";
	
	$res=mysqli_query($conn,$sql);
    $count=mysqli_num_rows($res);
    
    if($count==1)
    {
       $json['token']='deleted';
	   $sql = "UPDATE users_tbl SET token=''";
       mysqli_query($conn,$sql);
	}
	else{
			$json['logout']='Fail';
    	}
    $resp=json_encode($json);
    echo $resp;
    

?>