<?php
    echo $_POST["current"];
    $a = [
                4 => [
                    'img' => './img/news/4',
                    'name' => 'caption 4',
                    'des' => 'des 4',
                    'href' => '#'
                ],
                5 => [
                    'img' => './img/news/4',
                    'name' => 'caption 5',
                    'des' => 'des 5',
                    'href' => '#'
                ]
            ];
            echo json_encode($a);
?>