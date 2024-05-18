# Teste para RBR Digital

Olá, aqui seguem instruções de instalação do backend para o teste técnico RBR Digital.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- npm (Node Package Manager)

## Inicialização do Projeto

0. **Primeiramente clone o projeto em sua máquina com o git.**

    ```bash
    git clone git@github.com:nielitton/RBRDIGITAL.git
    ```

1. **Após o projeto clonado você precisará entrar nele**

    ```bash
    cd RBRDIGITAL
    ```

Siga estas etapas para inicializar o projeto em sua máquina:

1. **Entre no back-end da aplicação**
    1.2. **Você precisará iniciar o backend e o front end ao mesmo tempo, então inicie dois terminais.**

    ```bash
    cd rbr-backend
    ```
2. **Depois de entrar no projeto você precisará instalar suas dependências**

    Utilize o seguinte comando

    ```bash
    npm install ou npm i
    ```

3. **Depois de instaladas as dependências, tera que criar um arquivo .env**

    Crie esse arquivo na raiz no projeto de backend e cole o seguinte nele.
    isso irá lhe fornecer variáveis de ambiente para poder rodar o projeto.
    
    ```bash
    DB_STRING="mongodb+srv://nielitonsousa3040:8GDdrKcUOKuI5CY2@cluster0.xyrqk8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    PORT=3333
    ```


4. **Depois de criar o .env, você podera iniciar o projeto**

    ```bash
    npm run start
    ```

    O projeto irá rodar e lhe dirá em que porta está rodando e se ele se conectou com o banco ou não


6. **Para testar o projeto você pode usar os endpoints e dados que serão listados abaixo**
   - Criação de funcionário: POST - api/employees
   - Visualização de todos os funcionários: GET - api/employees ou api/employees?sort=false (Para organizar por data de criação decrescente, use a query search=<nome>, para pesquisar por nome).
   - Visualização de apenas um funcionário: GET - api/employees/<idDoFuncionário>
   - Edição de funcionário: PUT - api/employees/<idDoFuncionário>
   - Deleção de funcionário: DELETE - api/employees/<idDoFuncionário>

   **Para criação e atualização de funcionário, deve ser passado o seguinte body**
   ```bash
   {
    "name": "Final test update",
    "admissionDate": "AAAA-MM-DD",
    "charge": "full stack",
    "department": "teste2"
   }
   ```

   Todos os campos são obrigatórios nas requisições de **POST** e **PUT**

## Iniciando o front end

1. **Para iniciar o front end é bem mais simples**

    Em outro terminal dentro do nosso projeto digite o seguinte comando para entrar no projeto do front

    ```bash
    cd rbr-front
    ```

2. **Após isso você precisará instalar as dependências**

    ```bash
    npm install ou npm i
    ```

3. **Depois de instaladas, você estará pronto para roda o projeto**

    ```bash
    npm run dev
    ```

4. **Em seguida você verá no seu terminal o endereço para o projeto basta clicar no link**

    ```bash
    localhost:3000
    ```