<?php
define('ADVENT', true);
date_default_timezone_set('Europe/Berlin');
switch ($_GET['action']) {
    case 'openDoor':
        # code...
        if (isset($_GET['day']) && intval($_GET['day']) > 0 && intval($_GET['day']) < 25) {
            $currD = time();
            $d = strtotime('2016-11-'.intval($_GET['day']));
            if ($currD >= $d) {
                // set cookie
                echo '<base href="doors/'.intval($_GET['day']).'/">';
                include('tracking.php');
                include('doors/'.intval($_GET['day']).'/door.php');

            } else {
                // Locked 423
                echo "Not so fast";
            }
        }
        break;
    case 'getDoorInfo':
    if (isset($_GET['day']) && intval($_GET['day']) > 0 && intval($_GET['day']) < 25) {
        $fPath = 'doors/'.intval($_GET['day']).'/frame.json';
        $fData = file_get_contents($fPath);
        $info = json_decode($fData, true);
        $githubData = array();
        $aContext = array(
            'http' => array(
                'header' => [
                       'User-Agent: PHP'
               ]
            ),

       );
        if ($_SERVER['SERVER_ADDR'] == '172.21.1.13') {
            $aContext['http']['proxy'] = 'tcp://proxybi.pb.bib.de:8080';
            $aContext['http']['request_fulluri'] = true;
        }
        $cxContext = stream_context_create($aContext);
        $githubData = json_decode(file_get_contents('https://api.github.com/users/'.$info['author'], false, $cxContext), true);



        $info['author_name'] = $githubData['name'];
        $info['profile_picture'] = $githubData['avatar_url'];
        echo json_encode($info);
    }
    break;



    default:
        # code...
        break;
}


?>
