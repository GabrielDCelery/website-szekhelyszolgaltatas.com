<?php

require('../settings.php');

if(isset($_POST['product']) && isset($_POST['mail']) && isset($_POST['phone'])){

$product = $_POST['product'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];

/***************************************************************************
EMAIL TO ADMIN
***************************************************************************/

$to_admin = $admin_email;

$subject_admin = 'Új székhely feliratkozó!';

$header_admin = 'From: ' . $contact_email . "\r\n" .
    'Reply-To: ' . $contact_email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message_admin = 'Új székhely feliratkozó, a feliratkozó adatai:';
$message_admin .= "\r\n";
$message_admin .= 'Csomag: ';
$message_admin .= $product;
$message_admin .= "\r\n";
$message_admin .= 'Email: ';
$message_admin .= $mail;
$message_admin .= "\r\n";
$message_admin .= 'Telefon: ';
$message_admin .= $phone;

$subject_admin = iconv("UTF-8", "ISO-8859-2", $subject);
$message_admin = iconv("UTF-8", "ISO-8859-2", $message);

mail($to_admin, $subject_admin, $message_admin, $header_admin);

/***************************************************************************
EMAIL TO CUSTOMER
***************************************************************************/

$to = $mail;

$subject = 'Köszönjük feliratkozását!';

$header = 'From: ' . $contact_email . "\r\n" .
    'Reply-To: ' . $contact_email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'Köszönjük megrendelését!';
$message .= "\r\n";
$message .= 'Jelen levelünkhöz csatoltunk egy adatlapot, amit ha kitölt és emailen visszaküld, akkor az felgyorsítja a szerződéskötés menetét.';
$message .= "\r\n";
$message .= 'Amennyiben kérdése van, keressen bennünket telefonon!';
$message .= "\r\n";
$message .= $contact_name;
$message .= "\r\n";
$message .= $contact_phone;
$message .= "\r\n";
$message .= $contact_email;
$message .= "\r\n";
$message .= $contact_address;
$message .= "\r\n";
$message .= $contact_website;

$subject = iconv("UTF-8", "ISO-8859-2", $subject);
$message = iconv("UTF-8", "ISO-8859-2", $message);

mail($to, $subject, $message, $header);

echo($message);

}

?>