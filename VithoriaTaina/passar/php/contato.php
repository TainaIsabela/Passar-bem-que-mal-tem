<?php

$url="localhost";
$usuario="root";
$senha="";
$bd = "passarbem";
$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$conteudo = $_POST['conteudo'];

$nome = utf8_decode($nome);
$email = utf8_decode($email);
$tel = utf8_decode($tel);
$conteudo = utf8_decode($conteudo);

$con = mysqli_connect($url, $usuario, $senha, $bd);
if (!$con){
	die("Falha de conexão: ".mysqli_connect_error());
} 
	echo "Conectado!";

$sql="INSERT INTO contato (nome, email, tel, conteudo) VALUES ('$nome', '$email', '$tel', '$conteudo')";
if (mysqli_query($con,$sql)){
	echo "<br> Inserido com sucesso";}
	else{
		echo "Erro: ".$sql."<br>".mysqli_error($con);
}

?>