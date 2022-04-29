<?php 
session_start();
include 'connect.php';

if(isset($_POST['userName']) && isset($_POST['userPassword'])){

    function validate($data){
        $data= trim($data);
        $data= stripslashes($data);
        $data= htmlspecialchars($data);
        return $data;
    }
}

$uname = validate($_POST['userName']);
$pass = validate($_POST['userPassword']);

if(empty($uname)){
    header("Location: login.php?error=User Name is requird");
    exit();
}

else if(empty($pass)){
    header("Location: login.php?error=Password is requird");
    exit();
}

$sql=" SELECT * FROM  Account WHERE userName ='$uname' AND userPassword ='$pass' ";

$result=mysqli_query($conn,$sql);


if(mysqli_num_rows($result) === 1){
    $row = mysqli_fetch_assoc($result); 
    $_SESSION['userName']= $row['userName'];
    $_SESSION['userScores']= $row['userScores'];
    header("Location: home.php");
    exit();
}
else{
    header("Location: login.php?error=Incorrect User Name or Password");
}

