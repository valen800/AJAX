<?php

    $xmlResult = $_POST['params'];

    $xml = simplexml_load_string($xmlResult);

    echo 'Tu nombre es: '.$xml->name;
    echo 'Tu apellido es: '.$xml->lastname;
    echo 'Tu edad es: '.$xml->age;