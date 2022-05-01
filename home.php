
<?php 
session_start();
?>
    <!DOCTYPE html>
    <html>
        <head>
            <title>Home</title>
            <link rel="stylesheet" type="text/css" href="homestyle.css">
        </head>
        <body>
            <a class="float" href="logout.php"><img src="images/logout.png" width="50" height="50"></a>
            <div>
                <h1>Hello, <?php echo $_SESSION['userName']; ?></h1> 
                <h1>Choose youre game level: </h1>
            </div>
            <br> <br>
            <a class="button" href="easy.html">Easy</a>
            <br>
            <a class="button" href="normal.html">Normal</a>
            <br>
            <a class="button" href="hard.html">Hard</a>
            <script src="sketch.js"></script>
        </body>
    </html>



