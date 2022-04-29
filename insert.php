<?php
    include 'connect.php';
    session_start();

    $userName = $_POST['username'];
    $userPassword = $_POST['userPassword'];
    $signup = $_POST['signup'];
    $userScores = '0';

    $sql = "INSERT INTO Account (userName, userPassword, userScores)
    VALUES ('$userName', '$userPassword', '$userScores')";
    
    if (mysqli_errno() == 1062) {
        header("Location: login.php?error=Incorrect User Name or Password");
    
    if ($conn->query($sql)) {
        $_SESSION['userName'] = $userName;
        $_SESSION['userScores']= "0";
        header("Location: home.php");
        exit();
    }

    $conn->close();
?>