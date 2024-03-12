<?php 
$post = (!empty($_POST)) ? true : false;

if($post) {
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'your_email_smtp'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'your_email_pass'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('your_email_smtp'); // от кого будет уходить письмо?
$mail->addAddress('your_email'); // Кому будет уходить письмо 
$mail->isHTML(true);

$mail->Subject = 'Сообщение с формы обратной связи';
$mail->Body    = '' .$name . ' оставил сообщение <br>Почта: ' .$email. '<br>Сообщение: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Успешно отправлено!';
}

}
?>
