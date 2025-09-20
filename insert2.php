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

$name=$_POST['name1'];
$password=$_POST['pass'];

    
$sql="INSERT INTO data2 (name,password)
VALUES('$name','$password')";
if(mysqli_query($con,$sql)){
    echo "<h3>data stored in a database successfully."
    . " Please browse your localhost php my admin"
    . " to view the updated data</h3>"; 
}
else{
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}
    
$run=mysqli_query($con,$sql);
mysqli_close($con);
include 'connect.php';
}
?>