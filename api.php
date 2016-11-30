<?php

switch ($_GET['action']) {
    case 'openDoor':
        # code...
        if (isset($_GET['day']) && intval($_GET['day']) > 0 && intval($_GET['day']) < 25) {
            $currD = time();
            $d = strtotime('2016-11-'.intval($_GET['day']));
            if ($currD >= $d) {
                // set cookie
                echo '<base href="doors/'.intval($_GET['day']).'/">';
                include('doors/'.intval($_GET['day']).'/door.php');
            } else {
                // Locked 423
                echo "Not so fast";
            }
        }
        break;



    default:
        # code...
        break;
}


?>
