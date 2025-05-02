<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Asegura que la ruta es correcta

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);
    
    try {
        // Depuración (quitar en producción)
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = 'html';
        
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'lgalvismoreno@gmail.com';
        $mail->Password = 'nkty bels nwtr qwrt';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom('lgalvismoreno@gmail.com', 'Formulario de Contacto');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('lgalvismoreno@gmail.com'); 
        
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body    = "<strong>Nombre:</strong> $name<br><strong>Correo:</strong> $email<br><strong>Mensaje:</strong><br>$mensaje";

        // Enviar correo
        if ($mail->send()) {
            echo "success";
        } else {
            echo "error";
        }
    } catch (Exception $e) {
        echo "Error: " . $mail->ErrorInfo;
    }
} else {
    echo "invalid_request";
}
?>
