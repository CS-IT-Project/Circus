<?php
    $servername = "localhost";
    $user = "clown";
    $password = "clown1234";

    // Create connection
    $conn = new mysqli($servername, $user, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
?>