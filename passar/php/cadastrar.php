<?php  
$url='localhost';
$usuario='root';
$senha='';
$bd='passarbem';
$user=$_POST['Usuario'];
$nome=$_POST['Nome'];
$
$con = mysqli_connect($url, $usuario. $senha, $bd);
if (!$con) {
	die("Falha de conexão: ".mysqli_connect_error());
}

echo "Conectado";
$sql="INSERT INTO usuario VALUES ('$user', '$nome')";
if(mysqli_query($con, $sql)){
	echo "inserido com sucesso"
}else{
	echo "Error: ".$sql."<br>".msqli_error($con);
}

?>