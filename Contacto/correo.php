<?php
// require './src/PHPMailer.php';
// require './src/SMTP.php';
// require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
// require './vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
  
$correo = $_POST["correo"];
$comentario = $_POST["comentario"];

require 'vendor/autoload.php';

$mail=new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$to = 'alwer93934@gmail.com';
$subject = 'Prueba 1';
$message = $comentario; 
$from = $correo;
$mail->send(); 
// Sending email
if(mail($to, $subject, $message)){
    echo '<script languaje="javascript">
    alert("Correo enviado exitosamente"); 
    window.history.go(-1);
    </script>';
} 
else{
    echo '<script languaje="javascript">
    alert("El correo no se pudo enviar"); 
    </script>';
}


// $body = 'Cuerpo del correo de prueba';

// $mail->IsSMTP();
// $mail->Host       = 'smtp.gmail.com';
// $mail->SMTPSecure = 'tls';
// $mail->Port       = 587;
// $mail->SMTPDebug  = 1;
// $mail->SMTPAuth   = true;
// $mail->Username   = 'tucorreo@gmail.com';
// $mail->Password   = 'tuclave';
// $mail->SetFrom('tucorreo@gmail.com', "juliocpiro");
// $mail->AddReplyTo('no-reply@mycomp.com','no-reply');
// $mail->Subject    = 'Correo de prueba PHPMailer';
// $mail->MsgHTML($body);

// $mail->AddAddress('gianni@gmail.com', 'Gianni');
// $mail->send();

?>