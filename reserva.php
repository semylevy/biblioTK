<?php

  define('__ROOT__', dirname(dirname(__FILE__)));
  require_once(__ROOT__ . '/legarda/config.php');

  $fecha = $_POST['date'];
  $hora = $_POST['time'];
  $cubiculo = $_POST['cubiculo'];
  $matricula = $_POST['matricula'];

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO reservacion (hora, fecha, num_cubiculo, matricula)
  VALUES ($hora, '$fecha', $cubiculo, '$matricula')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();


 ?>
