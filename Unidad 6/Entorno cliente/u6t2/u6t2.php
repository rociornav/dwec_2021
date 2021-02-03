<?php

$listaLocalidades=[
    "Sevilla",
    "Málaga",
    "Córdoba",
    "Granada",
    "Murcia",
    "Madrid",
    "Bilbao",
    "Algeciras",
    "Valencia",
    "Almería"

];

$localidadRecibida=$_GET["localidadName"];
$respuesta=false;
foreach($listaLocalidades as $localidad){
    if(strtolower($localidad)==strtolower($localidadRecibida)){
        $respuesta=true;
    }
}

if($respuesta){
    echo("true");
}else{
    echo("false");
}
?>
