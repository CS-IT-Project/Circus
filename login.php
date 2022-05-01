<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div>
            <h1>Login</h1>
            <form action="check.php" method="post">
                <?php if(isset($_GET['error'])){?>
                <p class="error"><?php echo $_GET['error']; ?></p>
                <?php } ?>

                <label> User Name </label>
                <input class="input" type="text" name="userName" placeholder="User Name">
                <label> Password </label>
                <input class="input" type="password" name="userPassword" placeholder="Password">
                <button class="button" type="submit">Login</button>
                <h2>Don't have an account? <a href="signup.html">  Sign Up</a> </h2>
            </form> 
        </div>
    </body>
</html>