<?php

$url="localhost";
$usuario="root";
$senha="";
$bd = "passarbem";
$nome = $_POST['nome']
$email = $_POST['email']
$tel = $_POST['tel']
$conteudo = $_POST['conteudo']


$con = mysqli_connect($url, $usuario, $senha, $bd);
if (!$con){
	die("Falha de conexão: ".mysqli_connect_error());
} else{
	echo "Conectado!";
}

$sql="INSERT INTO contato VALUES ('$nome', '$email', '$tel', $conteudo)";
mysqli_query($con,$sql)

?>