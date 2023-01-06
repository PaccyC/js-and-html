 <?php

// or($marks=0; $marks<30;$marks++){
//     echo "$marks <br>";
//     if($marks == 10){
        
//         break;
//     }
    
// }
// $num=20;
// if($num>20){
//     echo "the number is greater than 20";
//     echo "<br>";
// }
// else if($num==20){
//     echo "the number is equal to 20";
//     echo "<br>";
// }
// else{
//     echo "the number is less than 20";
//     echo "<br>";
// }

// $numb=2;
// while($numb<=20){
//     echo "$numb</br>";
//     $numb +=2;
// }
// $x=54;
// if($x%2==0){
//     echo "the number is even";
// }
// else{
//     echo "the number is odd";
// }f
//checking if the number is prime number
// $x=4;
// $i=0;
// $c=0;
// echo "Enter the value of $x:";
// for($i=1;$i<=$x ;$i++){
//     if($x%$i==0){
//         $c++;
//     }
//     if($c==0){
//         echo "the number is prime";
//     }
//     else{
//         echo "the number is not prime";
//     }
    
// }

// $y=1;
// for($y=0;$y<25;$y++){
//     echo "$y<br>";
    
// }
// $z=0;
// while($z<=5){
//     echo "$z<br>";
//     $z++;
    
// }
// //nested for loops
for($i=0;$i<=5;$i++){
    for($j=0;$j<=5;$j++){
        // echo "$i $j<br>";
        if(!($i==$j)){
            continue;
        }
        echo $i.$j ;
        echo "<br>";
        
    }
}
// do{
//     echo "the value of z is".$z;
//     echo "<br>";
//     $z++;
// }
// while($z>0 && $z<=10);
// $avg=90;
// switch($avg){
//     case 45:
//         echo "the average is under half ";
//         break;
//         case 50:
//             echo "the average is equal to half";
//             break;
//             case 76:
//                 echo "the average is greater than 50";
//                 break;
//                 case 90:
//                     echo "excellent";
//                     break;
// }
//foreach
$countries=array("Rwanda","USA","Russia","France");
foreach($countries as $element){
    echo "$element";
    echo "<br>";
}

$info=array("names"=>"peter",
            "residence"=>"Nyabihu",
            "email"=>"peter543@gmail.com",
            "father"=>"John",
            "mother"=>"Lilian");
            foreach($info as $key=> $element){
                echo "$key".":".$element;
                echo "<br>";
            }
            //printing even number less than 20
            for($num=1;$num<=20;$num++){
                if($num%2==0){
                    
                }
                else{
                    continue;
                }
                echo "$num";
                echo "<br>";
            }

?> 