
<?php 
session_start();

//if(isset($_SESSION['userName'])){
?>

    <!DOCTYPE html>
    <html>
        <head>
            <title>Home</title>
            <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
            <h1>Hello, <?php echo $_SESSION['userName']; ?></h1>
            <h1>your Scores: <?php echo $_SESSION['userScores']; ?></h1>
            <a href="logout.php">Logout</a>
        </body>
    </html>

<?php
//}
//else{
//    header("Location: login.php");
//    exit();

//}
?>


