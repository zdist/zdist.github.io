<!-- INFORMATION BELOW REDACTED FOR PRIVACY REASONS -->
 
<!-- Code assistance from: https://www.youtube.com/watch?v=fIYyemqKR58 -->
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

<!-- DEBUG: -->
<!-- $mail->SMTPDebug = SMTP::DEBUG_SERVER; -->

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Post = 587;

<!-- ALL INFORMATION BELOW IS MADE UP -->
$mail->Username = "REDACTED@gmail.com";
$mail->Password = "REDACTED";

$mail->setFrom($email, $name);
$mail->addAddress("REDACTED@gmail.com", "fName");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "email sent";
