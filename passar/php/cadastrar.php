<?php  
$url='localhost';
$usuario='root';
$senha='';
$bd='passarbem';
$con = mysqli_connect($url, $usuario. $senha, $bd);
if (!$con) {
	die("Falha de conexão: ".mysqli_connect_error());
}

echo "Conectado";



?>