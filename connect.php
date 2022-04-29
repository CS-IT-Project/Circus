<?php
    $servername = "localhost";
    $user = "clown";
    $password = "clown1234";
    $db_name="Database";

    // Create connection
    $conn = mysqli_connect($servername, $user, $password, $db_name);

    // Check connection
    if (!$conn) {
        echo "Connection failed";
    } 
?>