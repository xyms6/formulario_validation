# Formulário de Validação

Este projeto é um formulário simples que realiza a validação dos dados inseridos antes de permitir o envio. O formulário valida o nome, e-mail e idade do usuário, exibindo mensagens de erro caso os dados estejam incorretos.

## Como Funciona

### 1. **HTML**

- O formulário contém três campos: **Nome**, **E-mail** e **Idade**.
- Cada campo possui um rótulo (`<label>`) e um campo de entrada (`<input>`) para o usuário digitar seus dados.
- O formulário também possui um botão de envio.

### 2. **JavaScript**

#### **Validação**

- **Nome:**
  - O nome é obrigatório e deve ter pelo menos 3 caracteres.
  
- **E-mail:**
  - O e-mail é obrigatório e deve seguir o formato de um e-mail válido (ex: exemplo@dominio.com).

- **Idade:**
  - A idade é obrigatória e deve ser maior ou igual a 18 anos.

#### **Eventos e Funções**

- **Prevenção do envio:** 
  - Ao tentar enviar o formulário, o evento de envio é interceptado para evitar o recarregamento da página.
  
- **Mensagens de erro:**
  - Se algum campo não passar na validação, uma mensagem de erro será exibida ao lado do campo correspondente.

- **Validação do Formulário:**
  - Cada campo é validado com base nas regras definidas no objeto `regrasValidacao`.
  - Se algum campo não passar na validação, o envio é bloqueado e o erro é mostrado.

- **Envio bem-sucedido:**
  - Se todos os campos estiverem corretos, o formulário é enviado com sucesso, e o formulário é resetado.

---

Esse código é um exemplo simples de como validar os campos de um formulário usando JavaScript, oferecendo feedback imediato ao usuário para garantir que os dados inseridos estejam corretos.
