<?php
    $current = $_POST["current"];
    $a = [
        1 => [],
        2 => [],
        3 => [],
        4 => [
            'img' => './img/news/4.jpg',
            'title' => 'caption 4',
            'des' => 'des 4',
            'href' => '#'
        ],
        5 => [
            'img' => './img/news/4.jpg',
            'title' => 'caption 5',
            'des' => 'des 5',
            'href' => '#'
        ]
    ];
    echo json_encode(array(
        "body" => $a[$current + 1],
        "count_array"=> count($a)
    ));

?>