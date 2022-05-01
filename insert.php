<?php
    session_start();
    include 'connect.php';

    $userName = $_POST['userName'];
    $userPassword = $_POST['userPassword'];
    $userScores = '0';

    $sql = "INSERT INTO Account (userName, userPassword, userScores)
    VALUES ('$userName', '$userPassword', '$userScores')";
    
    if ($conn->query($sql)) {
        $_SESSION['userName'] = $userName;
        $_SESSION['userScores']= "0";
        header("Location: home.php");
        exit();
    }

    $conn->close();
?>