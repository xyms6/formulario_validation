// Define as regras para validar os campos do formulário
const regrasValidacao = {
    nome: { required: true, minLength: 3 }, // Nome é obrigatório e deve ter pelo menos 3 letras
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // E-mail deve seguir um formato válido
    idade: { required: true, min: 18 }, // Idade é obrigatória e deve ser maior ou igual a 18
  };

  // Captura o evento de envio do formulário
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    let valido = true; // Variável que armazena se o formulário está válido
    
    function mostrarErro(id, mensagem) {
      document.getElementById(`erro-${id}`).textContent = mensagem; // Exibe a mensagem de erro no campo correspondente
    }
    
    function limparErros() {
      document.querySelectorAll(".error").forEach(el => el.textContent = ""); // Limpa todas as mensagens de erro antes de validar novamente
    }
    
    limparErros(); // Chama a função para garantir que não haja mensagens antigas

    // Validação do nome
    const nome = document.getElementById("nome").value;
    if (regrasValidacao.nome.required && nome.trim() === "") { // Se o nome estiver vazio
      mostrarErro("nome", "O nome é obrigatório.");
      valido = false;
    } else if (nome.length < regrasValidacao.nome.minLength) { // Se o nome for menor que 3 caracteres
      mostrarErro("nome", "O nome deve ter pelo menos 3 caracteres.");
      valido = false;
    }

    // Validação do e-mail
    const email = document.getElementById("email").value;
    if (regrasValidacao.email.required && email.trim() === "") { // Se o e-mail estiver vazio
      mostrarErro("email", "O e-mail é obrigatório.");
      valido = false;
    } else if (!regrasValidacao.email.pattern.test(email)) { // Se o e-mail não estiver no formato correto
      mostrarErro("email", "Formato de e-mail inválido.");
      valido = false;
    }

    // Validação da idade
    const idade = document.getElementById("idade").value;
    if (regrasValidacao.idade.required && idade.trim() === "") { // Se a idade estiver vazia
      mostrarErro("idade", "A idade é obrigatória.");
      valido = false;
    } else if (parseInt(idade) < regrasValidacao.idade.min) { // Se a idade for menor que 18
      mostrarErro("idade", "Você deve ter pelo menos 18 anos.");
      valido = false;
    }

    // Se todas as validações passarem, exibe mensagem de sucesso
    if (valido) {
      alert("Formulário enviado com sucesso!"); // Mostra uma mensagem para o usuário
      this.reset(); // Limpa o formulário
    }
  });