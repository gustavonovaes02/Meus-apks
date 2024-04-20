<?php
// Salve este código como criar_email.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = preg_replace("/[^A-Za-z0-9]/", '', $_POST['email']); // Sanitização simples
    $domain = "exemplo.com";
    $email = $username . '@' . $domain;
    $expiry_date = date('Y-m-d H:i:s', strtotime('+7 days')); // Define a validade para 7 dias

    // Aqui você deve inserir o código para salvar o e-mail e a data de validade no banco de dados
    // ...

    echo "Seu e-mail temporário é: " . $email . "<br>";
    echo "Este e-mail será válido até: " . $expiry_date;
}
?>
