<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'shashi.satwik22@gmail.com'; 
    $subject = 'New Message from Website Contact Form';
    $body = "From: $name\n E-Mail: $email\n Message:\n $message \n\n Regards,\n $name";

    if(!empty($name) && !empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            echo 'Invalid Email';
        } else {
            if(mail($to, $subject, $body)){
                echo 'Your message has been sent';
            } else {
                echo 'Sorry, an error occured. Please try again later.';
            }
        }        
    } else {
        echo 'All fields are required.';
    }
?>