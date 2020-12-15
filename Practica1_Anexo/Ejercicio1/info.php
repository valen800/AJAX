<?php
    // database credentials
    $serverName = "localhost";
    $database = "agenda";
    $username = "phpmyadmin";
    $password = "phpmyadmin";
    $consulta = "SELECT nom,cognoms FROM contactes;";

    //connection databse
    $database = createConnectionToDB($serverName, $username, $password, $database);
    //Check connection
    checkConnection($database);

    //

    $result = mysqli_query($database, $consulta);
    
    while ($fila = mysqli_fetch_assoc($result)) {

        echo $fila['cognoms'].",".PHP_EOL;
        echo $fila['nom'].PHP_EOL;
        echo "<br>";
    }

    //
    echo "Connected succesfully";
    //Close database
    closeDB($database);


    //Create a connection to database
    function createConnectionToDB($serverName, $username, $password, $database) {
        $db = mysqli_connect($serverName, $username, $password, $database);
        return $db;
    }

    //Check connection
    function checkConnection($db) {
        if (!$db) {
            die("Connection faile: ".mymysqli_connect_error());
            echo "Connection faile: ".mymysqli_connect_error();
        }
    }
    //Close connection with database
    function closeDB($db) {
        mysqli_close($db);
    }
    
?>