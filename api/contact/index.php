<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    date_default_timezone_set('America/New_York');

    if (empty($_POST['fname']) && empty($_POST['email'])) die();

    if ($_POST) {

        // set response code - 200 OK
        http_response_code(200);
        $subject = "SABRINAGIRVAN.COM | Website Inquiry";
        $subject_auto = "SABRINAGIRVAN.COM | Website Inquiry (Auto Response)";
        $to = "bm.dev84@gmail.com";
        $from = 'From: ' . $_POST['fname'] . ' ' . $_POST['lname'];
        $email = $_POST['email'];
        $time = date('F j, Y g:i A', time());
        $message = $_POST['message'];

        // message formatting
        $msg = "$from \r\nEmail: $email \r\n$time \r\n\r\nMessage: \r\n$message";

        // headers
        $headers = "From: admin@sabrinagirvan.com";
        mail($to, $subject, $msg, $headers);

        // send auto response
        $auto_response_msg = "Hi, I have received your e-mail and will be in touch with you as soon as possible!";
        mail($email, $subject_auto, $auto_response_msg, $headers);

        // echo json_encode( $_POST );
        echo json_encode(array(
            "sent" => true
        ));
    } else {

        // feed error
        echo json_encode(["sent" => false, "message" => "There was an error processing your request."]);
    }

?>