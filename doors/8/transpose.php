<?php
    $pattern = json_decode(file_get_contents('patterns/'.$_GET['p'].'.json'), true);
    $tp_by = intval($_GET['by']);
    for ($i=0; $i<count($pattern); $i++) {
        $pattern[$i]['note'] = intval($pattern[$i]['note'] + $tp_by);
    }
    echo json_encode($pattern);
?>
