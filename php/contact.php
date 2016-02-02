<?php 
if(isset($_POST['submit'])){
    $to = "sujithgannamaneni@gmail.com";
    $from = $_POST['contact-email'];
    $name = $_POST['contact-name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['contact-message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['contact-message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); 
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>