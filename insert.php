<?php
    include 'connect.php';
    include 'index.php';

    $dbname = "Database";
    $servername = "localhost";
    $user = "clown";
    $password = "clown1234";

    // Create connection
    $conn = new mysqli($servername, $user, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    try {
        $sql = "INSERT INTO Account (userName, userPassword, userScores)
        VALUES ('$userName', '$userPassword', '$userScores')";
    }
    catch (Exception $e) {
        if ($e->getCode() == 1062);
            echo "This username is already taken";
    }
    
    if ($conn->query($sql)) {
        echo "Your account has been created successfully";
    }

    $conn->close();
?>
