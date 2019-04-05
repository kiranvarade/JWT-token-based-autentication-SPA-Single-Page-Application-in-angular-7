<?php
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$dbhost="localhost";
$dbusername="root";
$dbpassword="";
$db_name="techonvo_obd";
$token="";
$conn=mysqli_connect($dbhost, $dbusername, $dbpassword, $db_name);

if(!$conn)
{
	echo "Connection Failed";
}