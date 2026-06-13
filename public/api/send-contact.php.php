<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["error" => "Invalid request"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$subject = htmlspecialchars($data['subject'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

$to = "info@venkitravel.com"; // Destination email

$emailSubject = "Website Contact Form - $subject";

$emailBody = "
Name: $name

Email: $email

Phone: $phone

Subject: $subject

Message:
$message
";

$headers = "From: noreply@venkitravel.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $emailSubject, $emailBody, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "Failed to send email"]);
}
?>