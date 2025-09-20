<html>
    <body>
    <?php
  $con= mysqli_connect("localhost","root","","register");
if(!$con)
{
    die("Connection failed");
}
else{
    echo"success!";
}
if(isset($_POST['submit']))
{

$firstName=$_POST['firstName'];
$email=$_POST['email'];
$date=$_POST['date'];
$time=$_POST['time'];

    
$sql="INSERT INTO data3 (firstName,email,date,time)
VALUES('$firstName','$email','$date','$time')";
if(mysqli_query($con,$sql)){
    echo "<h3>data stored in a database successfully."
    . " Please browse your localhost php my admin"
    . " to view the updated data</h3>"; 
}
else{
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($con);
}
    
$run=mysqli_query($con,$sql);
mysqli_close($con);
include 'connect.php';
}
?>