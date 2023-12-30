# Teste Desenvolvedor Full Stack - Lumi

O projeto `Lumi Back` é uma API construída com Express para fornecer endpoints que interagem com um banco de dados PostgreSQL. Este projeto visa servir como backend para aplicações relacionadas ao desafio `Lumi`.

## **Monorepo e Projetos Relacionados**

- **[Monorepo Lumi Challenge](https://github.com/miguelsmuller/lumi-challenge)**
  
- **[Lumi Extraction](https://github.com/miguelsmuller/lumi-extraction)**

- **[Lumi Front](https://github.com/miguelsmuller/lumi-front)**

## **Aspectos Técnicos**

Os detalhes completos do desafio, incluindo especificações para o projeto do front-end, estão disponíveis no PDF do monorepo. Você pode acessar o PDF através do link abaixo:

- **[Detalhes do Desafio - Lumi Challenge](https://github.com/miguelsmuller/lumi-challenge/blob/e8622d0e399c3e2c4802c0c3a1911dc5d86953a8/docs/Teste%20Pr%C3%A1tico%20-%20Dev%20Full%20Stack%20-%20Lumi.pdf)**

#### Outros Pontos 

- **TypeScript**: A escolha do TypeScript permite uma melhor integração e verificação de tipos, tornando o código mais robusto e manutenível.

- **Express**: Utilizado como framework para construir a API, oferecendo facilidade e eficiência na criação de rotas e middlewares.

- **PostgreSQL**: O PostgreSQL é utilizado para recuperar os dados salvos inseridos previamente pelo processo de extração.


## **Estrutura do Projeto**
```
.
├── app
│   ├── app.ts
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routers/
├── .editorconfig
├── .gitignore
├── package.json
├── tsconfig.json
├── Makefile
├── Dockerfile
└── README.md
```


## **Scripts do Projeto**

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento usando `ts-node-dev`.

- **`npm run build`**: Compila o código TypeScript para JavaScript usando o TypeScript Compiler (`tsc`).

- **`npm start`**: Inicia o servidor após a compilação do código.

### **Makefile**

Adicionalmente aos comando acima esse projeto também possui um Makefile com os seguintes alvos:

- **`make build-image`**: Constrói uma imagem Docker para o projeto.

- **`make run-image`**: Inicia um contêiner Docker com o projeto em execução.

- **`make stop-image`**: Para e remove o contêiner Docker do projeto.

- **`make tag-image`**: Adiciona uma tag à imagem Docker.

- **`make publish-image`**: Publica a imagem Docker em um registro (é necessário configurar o registro).


## **Rodando Localmente**

Para executar o servidor localmente, siga os passos abaixo:

1. Configuração do Arquivo `.env`:
   - Copie o arquivo `.env.example` para `.env`:
    ```bash
    cp .env.example .env
    ```

   - Preencha as variáveis de ambiente conforme necessário no arquivo `.env`.


2. **Instale as dependências**:
```bash
npm install
```

3. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```


## **Rotas da API**

Após iniciar o servidor, você pode acessar os seguintes endpoints:

1. **`GET http://[HOST]/health`** Verifica o status do servidor.

2. **`GET http://[HOST]/invoices`** Retorna todos os registros do banco de dados.
    ### **Query Paramns**

    - **`startAt`**: Este parâmetro é utilizado para filtrar os registros a partir de uma data específica. Ele se relaciona com o campo de data `invoice_date`, permitindo que os usuários obtenham faturas que foram geradas após uma determinada data.

    - **`endAt`**: Este parâmetro é semelhante ao `startAt`, mas serve para definir uma data limite. Assim, apenas as faturas até a data especificada serão retornadas.
    
    - **`page`**: Este parâmetro é utilizado para navegar entre páginas de resultados. Seu valor determina qual página de resultados será retornada.

    - **`limit`**: Define o número máximo de registros que serão retornados em uma única chamada. Ao combinar este parâmetro com page, os usuários podem controlar a quantidade de registros por página e navegar pelos resultados.
