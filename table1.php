<html>
    <body>
<?php
$con= mysqli_connect("localhost","root","","register");
if(!$con)
{
    die("Connection failed");
}
else{
    echo"success";
}
$sql="CREATE TABLE data(firstName varchar(50), lastName varchar(50),email varchar(50), password varchar(12), confirmPassword varchar(12),gender varchar(8))";
$run=mysqli_query($con,$sql);
echo"table created";
mysqli_close($con);
?>
</body>
</html>
