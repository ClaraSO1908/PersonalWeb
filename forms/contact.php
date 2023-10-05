<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "clara.so1908@gmail.com";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_message = "Nombre: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Asunto: $subject\n\n";
    $email_message .= "Mensaje:\n$message";

    if (mail($to, $subject, $email_message, $headers)) {
        $response = array("status" => "success", "message" => "Tu mensaje ha sido enviado. ¡Gracias!");
        echo json_encode($response);
    } else {
        $response = array("status" => "error", "message" => "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        echo json_encode($response);
    }
} else {
    header("Location: index.php");
    exit();
}
?>
