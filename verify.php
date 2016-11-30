<?php
date_default_timezone_set('Europe/Berlin');

if (defined('DOOR')) {
    $d = strtotime('2016-11-'.DOOR);
    if (defined('ADVENT')) {
        if ($currD >= $d) {
        }
        else {
            header('Location: /');
        }
    } else {
        header('Location: /');
    }
} else {
    header('Location: /');
}
?>
