# Teste Desenvolvedor Full Stack - Lumi

O projeto `Lumi Back` é uma API construída com Express para fornecer endpoints que interagem com um banco de dados PostgreSQL. Este projeto visa servir como backend para aplicações relacionadas ao desafio `Lumi`.

## **Monorepo e Projetos Relacionados**

- **[Monorepo Lumi Challenge](https://github.com/miguelsmuller/lumi-challenge)**
  
- **[Lumi Extraction](https://github.com/miguelsmuller/lumi-back)**

- **[Lumi Front](https://github.com/miguelsmuller/lumi-front)**

## **Aspectos Técnicos**

- **TypeScript**: A escolha do TypeScript permite uma melhor integração e verificação de tipos, tornando o código mais robusto e manutenível.

- **Express**: Utilizado como framework para construir a API, oferecendo facilidade e eficiência na criação de rotas e middlewares.

- **PostgreSQL**: O PostgreSQL é utilizado para recuperar os dados salvos inseridos previamente pelo processo de extração.


## **Estrutura do Projeto**
```
.
├── app
│   ├── app.ts
│   ├── controllers
│   ├── models
│   ├── repositories
│   └── routers
├── .env.example
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```


## **Scripts do Projeto**

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento usando `ts-node-dev`.

- **`npm run build`**: Compila o código TypeScript para JavaScript usando o TypeScript Compiler (`tsc`).

- **`npm start`**: Inicia o servidor após a compilação do código.


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


## Rotas da API

Após iniciar o servidor, você pode acessar os seguintes endpoints:

1. **`GET http://localhost:3000/health`**: 
    - Verifica o status do servidor.

2. **`GET http://localhost:3000/getAll`**: 
    - Retorna todos os registros do banco de dados.
