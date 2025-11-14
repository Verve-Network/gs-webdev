# gs-webdev

## Integrantes:
Igor Grave Teixeira - RM567663
Renan dos Reis Santos - RM 568540

## 📖Sobre o Projeto
Este projeto é uma aplicação web front-end de página única desenvolvida para a Global Solution da FIAP. O projeto consiste em um formulário de cadastro para uma plataforma fictícia chamada "Verve".

O foco principal do trabalho é a validação de dados no lado do cliente (client-side), utilizando JavaScript puro para verificar as entradas do usuário diretamente no navegador. A página captura informações de cadastro e fornece feedback imediato, indicando erros de preenchimento ou sucesso no envio.

## Funcionalidades:
Formulário HTML (index.html): Estrutura semântica para coletar dados do usuário, incluindo nome, CPF, e-mail, interesses e habilidades.

Validação em JavaScript (main.js):

    Campos Vazios: Verifica se os campos obrigatórios (Nome, CPF, Email) foram preenchidos.

    Formato de Email: Validação básica para garantir que o e-mail contenha @ e .com.

    Formato de CPF: Validação básica que verifica o comprimento do CPF.

    Seleção de Opções: Garante que pelo menos um "Interesse" e uma "Habilidade" (seja selecionada ou adicionada) estejam presentes.

    Adição Dinâmica: Permite ao usuário adicionar novas habilidades que não estão na lista padrão.

Feedback ao Usuário: Exibe uma lista de todos os erros de validação de forma clara ou uma mensagem de sucesso se todos os campos estiverem corretos.

Estilização (style.css): Um arquivo CSS básico para centralizar o conteúdo e organizar o layout.
