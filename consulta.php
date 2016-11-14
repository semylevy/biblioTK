<?php
  define('__ROOT__', dirname(dirname(__FILE__)));
  require_once(__ROOT__ . '/legarda/config.php');

  $fecha = $_POST['date'];
  $hora = $_POST['time'];

  $conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error)
	{
		$response = array('status' => 0);
		print_r(json_encode($response));
	  die();
	}


  $sql = "SELECT num_cubiculo FROM reservacion WHERE fecha='$fecha' AND hora=$hora";

  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo $row["num_cubiculo"];
      }
  } else {
      echo -1;
  }

  $conn->close();



 ?>
