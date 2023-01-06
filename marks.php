
    <?php

$marks=$_GET['marks'];

if($marks>=80 && $marks<=100){
    echo" Grade A";
}
elseif($marks>=70 && $marks<80){
    echo"Grade B";
}
elseif($marks>=60 && $marks<70){
    echo"Grade C";
}
elseif($marks>=50 && $marks<60){
    echo"Grade D";
}
elseif($marks>=30 && $marks<50){
    echo"Grade E";
}
else{
    echo"Grade F";
}

?>
