<?php
include "./db.php";
require_once './vendor/autoload.php';
use Firebase\JWT\JWT;
define('JWT_SECRET', 'kdkmafffddddfghdddhpriytmlldlrlremfklmflfs');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data_send = json_decode(file_get_contents('php://input'));
 
    $sql="SELECT * FROM users_tbl WHERE username='$data_send->uname' and password='$data_send->upwd'";    
    $res=mysqli_query($conn,$sql);
    $count=mysqli_num_rows($res);
    
    if($count==1)
    {
            $issuedAt = time();
            $expirationTime = $issuedAt + 120;  // jwt valid for 60 seconds from the issued time
            $payload = array(
                                'userid' => "1",
                                'iat' => $issuedAt,
                                'exp' => $expirationTime
                            );
            $key = JWT_SECRET;
            $alg = 'HS256';
            $jwt = JWT::encode($payload, $key, $alg);
                $json['login']='success';
                $json['token']=$jwt;
                            
                $token=$jwt;

                $sql = "UPDATE users_tbl SET token='$jwt'";
                mysqli_query($conn,$sql);

    }
    else
    {
      $json['key']="0";
      $json['status']="0";
     
    }
        $resp=json_encode($json);
        echo $resp;
    

?>