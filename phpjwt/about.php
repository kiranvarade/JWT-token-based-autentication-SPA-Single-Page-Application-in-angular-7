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
	
	 $json['match']='match';
     $query = "SELECT  * from tblemployee";
	 $result = mysqli_query($conn,$query) or die(mysqli_error());
	 while($row = mysqli_fetch_assoc($result))
	 {
	    $json['data']=$row; 
     }

}
else{
		 $json['match']='not match';


}
 $resp=json_encode($json);
        echo $resp;
    

?>