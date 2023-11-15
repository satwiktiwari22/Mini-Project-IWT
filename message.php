<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // replace with your database credentials
    $mysqli = new mysqli('localhost', 'username', 'password', 'database');

    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    }

    $stmt = $mysqli->prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
    $stmt->bind_param('sss', $name, $email, $message);

    if ($stmt->execute()) {
        echo "Message saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $mysqli->close();
?>