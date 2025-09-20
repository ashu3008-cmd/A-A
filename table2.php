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
$sql="CREATE TABLE data2(name varchar(50),password varchar(50) )";
$run=mysqli_query($con,$sql);
echo"table created";
mysqli_close($con);
?>
</body>
</html>
