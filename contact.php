<?php
function read_site_config_value($key, $fallback = '') {
    $config_path = __DIR__ . '/js/site-config.js';
    if (!is_readable($config_path)) {
        return $fallback;
    }

    $content = file_get_contents($config_path);
    $pattern = "/\\b" . preg_quote($key, '/') . "\\s*:\\s*(['\"])(.*?)\\1/s";
    if (preg_match($pattern, $content, $matches)) {
        return trim($matches[2]);
    }

    return $fallback;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed.';
    exit;
}

$recipient = read_site_config_value('email', 'hello@markmillmedia.com');
$company = read_site_config_value('companyName', 'Markmill Trade');
$domain = read_site_config_value('domain', 'markmillmedia.com');

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo 'Please provide your name, a valid email address, and a message.';
    exit;
}

$subject = 'Website inquiry for ' . $company;
$body = "Name: {$name}\nEmail: {$email}\n";

if ($phone !== '') {
    $body .= "Phone: {$phone}\n";
}

if ($service !== '') {
    $body .= "Service: {$service}\n";
}

$body .= "Domain: {$domain}\n\nMessage:\n{$message}\n";
$headers = [
    'From: website@' . $domain,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    header('Location: contact.html?sent=1');
    exit;
}

http_response_code(500);
echo 'The message could not be sent. Please email us directly.';
?>
