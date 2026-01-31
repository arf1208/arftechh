<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "email_anda@gmail.com"; // GANTI DENGAN EMAIL ANDA
    $subject = "Pesanan Baru dari ARFTECH: " . $_POST['service'];
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $body = "Nama: $name\nEmail: $email\nLayanan: " . $_POST['service'] . "\n\nPesan:\n$message";
    
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Pesan terkirim! ARFTECH akan menghubungi Anda.'); window.location.href='index.html';</script>";
    } else {
        echo "Maaf, terjadi kesalahan.";
    }
}
?>
