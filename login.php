<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form action="check.php" method="post">
        <h2>Login</h2>
        <?php if(isset($_GET['error'])){
            ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>
            <label> User Name </label>
            <input type="text" name="userName" placeholder="User Name">
            <label> Password </label>
            <input type="password" name="userPassword" placeholder="Password">
            
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="signup.html"> Sign Up</a></p>

    </form>
</body>
</html>