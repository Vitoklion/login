<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/14
 * Time: 15:38
 */


$servername = "localhost";
$username = "root";
$password = "";
$dbname="ssw";

$conn = new mysqli($servername,$username,  $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$phonename = null;
$pwd =null;
if (isset($_POST['phone'])&& isset($_POST['password'])){
    $phonename = addslashes(trim(stripslashes($_POST['phone'])));
    $pwd =addslashes(trim(stripslashes($_POST['password'])));
}
$sql="SELECT phone,password FROM myshite";
$result=$conn->query($sql);
if ($result->num_rows >0){
    if ($row=$result->fetch_assoc()){
        if ($phonename=== $row["phone"] && $pwd===$row["password"]){
            echo "<script type='text/javascript'>alert('欢迎你!');location='registration.html'</script>";
        }
        else{
            echo "用户名或密码错误，请重新输入！";
        }
    }

}


$conn->close();
?>