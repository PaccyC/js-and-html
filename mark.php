<?php
$A=$_GET['num1'];
$B=$_GET['num2'];
$C=$_GET['num3'];
$delta = 500;
if($delta>=0){
$delta =((-4*$A*$C)+ ($B*$B));
$squareroot= sqrt($delta);
$x1 =((-($B) +($squareroot))/2*$A);
$x2 =((-($B)-($squareroot))/2*$A);
}
echo" the first value of x is "$x1;
echo"<br>";
echo" the second value of x is .$x2";



?>