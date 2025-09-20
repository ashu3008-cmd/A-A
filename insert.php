
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
$lastName=$_POST['lastName'];
$email=$_POST['email'];
$password=$_POST['password'];
$confirmPassword=$_POST['confirmPassword'];
$gender=$_POST['gender'];


    
$sql="INSERT INTO data (firstName,lastName,email,password,confirmPassword,gender)
VALUES('$firstName','$lastName','$email','$password','$confirmPassword','$gender')";
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
</body>
</html>