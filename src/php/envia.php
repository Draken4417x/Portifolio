<?php
  // Captura e sanitiza os dados do formulário
  $nome = htmlspecialchars($_POST['nome']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $telefone = htmlspecialchars($_POST['telefone']);
  $mensagem = htmlspecialchars($_POST['mensagem']); // Nova variável para capturar a mensagem personalizada

  // Verifica se todos os campos estão preenchidos
  if (empty($nome) || empty($email) || empty($telefone) || empty($mensagem)) {
    die("Todos os campos são obrigatórios.");
  }

  // Valida se o e-mail é válido
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("O e-mail fornecido não é válido.");
  }

  // Destino e assunto do e-mail
  $destino = "reisdavi805@gmail.com";
  $assunto = "Coleta de dados - Portifolio";

  // Criação do corpo do e-mail com a mensagem personalizada
  $corpo = "Nome: " . $nome . "\n" .
           "E-mail: " . $email . "\n" .
           "Telefone: " . $telefone . "\n" .
           "Mensagem: " . $mensagem;

  // Cabeçalhos do e-mail
  $cabeca = "From: teste77davireis@gmail.com\r\n" .
            "Reply-To: " . $email . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

  // Envia o e-mail e verifica o resultado
  if (mail($destino, $assunto, $corpo, $cabeca)) {
    echo("E-mail enviado com sucesso!");
  } else {
    echo("Houve um erro ao enviar o E-mail!");
  }
?>