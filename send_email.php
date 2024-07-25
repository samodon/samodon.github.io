<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email parameters
    $to = 'jovanesammy@gmail.com';
    $subject = 'New Message from Website Contact Form';
    $body = "Name: $firstname $lastname\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent to $to";
    } else {
        echo "Email sending failed.";
    }
}
?>

