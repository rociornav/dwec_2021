<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$respuesta = file_get_contents('series.json');
echo $respuesta;
?>