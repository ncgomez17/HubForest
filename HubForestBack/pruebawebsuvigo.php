<?php

if ($conn = new mysqli('localhost.uvigo.es', 'jrodeiro', 'RnNSrgAHe6', 'jrodeiro') or die('fallo conexion')){
    //var_dump($conn);
}
else{
    echo 'fallo conexion';
}

$result = $conn->query('select * from programa');

for($i=0;$i<$result->num_rows;$i++){
    $rows[]=$result->fetch_assoc();
}
$resource = $rows;

var_dump($resource);
header('Content-type: application/json;charset=utf-8');
echo(json_encode($resource));
exit();


?>