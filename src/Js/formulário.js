  // Inicializa o EmailJS (substitua "SEU_USER_ID" pelo seu ID do EmailJS)
  (function () {
    emailjs.init("vxLWS1pgGDrtkXtHS");
  })();

  // Captura o evento de envio do formulário
  document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional

    // Captura os valores do formulário
    var params = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      mensagem: document.getElementById("mensagem").value
    };

    // Envia os dados para o EmailJS (substitua "SEU_SERVICE_ID" e "SEU_TEMPLATE_ID")
    emailjs.send("service_fugilrh", "template_llsu4nu", params)
      .then(function (response) {
        alert("E-mail enviado com sucesso!");
        document.getElementById("meuFormulario").reset(); // Limpa o formulário
      }, function (error) {
        alert("Erro ao enviar o e-mail. Tente novamente.");
        console.log("Erro:", error);
      });
  });