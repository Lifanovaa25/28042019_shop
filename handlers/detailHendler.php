<?php 
    //echo 'Привет';
    include ($_SERVER['DOCUMENT_ROOT'] .'/php/connect.php');
    // https://study.inordic.ru/panel/lesson_teacher?group=34&lesson=252
    $detID = $_GET['id'];

    sleep(2);


    // ищем дочерние категории на основании переданной родительской кате
    $query = "SELECT * FROM `catalog` WHERE `id` = $detID";
    $result = mysqli_query($db, $query);
    echo json_encode($result);

?>