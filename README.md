
# <h1 align="center"> Plataforma Compiladoras

</h1>
 <br>

## Tabela de Conteúdos

1. [Principais Features da API](#-Principais-Features-da-API)
2. [Instruções de uso](#-Instruções-de-uso)
3. [Tecnologias Utilizadas](#-Tecnologias-Utilizadas)
   - [Para construção da API](#Para-construção-da-API)
   - [Para uso da API](#Para-uso-da-API)
4. [Features e rotas](#-Features-e-Rotas)
   - [Manipulando os registros de anjas](#Manipulando-os-registros-de-anjas)
   - [Manipulando os registros de abençoadas](#Manipulando-os-registros-de-abençoadas)
5. [Proposta Completa do Projeto](#-Proposta-Completa-do-Projeto)
6. [Aprendizados](#-Aprendizados)
7. [Agradecimentos](#-Agradecimentos)



## 💡 Principais Features da API

- [x] Visualizar todos os projetos da Plataforma Compiladoras;
- [x] Visualizar todas as redes sociais da Plataforma Compiladoras;
- [x]

## 💻 Instruções de uso

| - Tenha instalados os programas [Node.js](https://nodejs.org/en/download/) e [PostgreSQL](https://www.postgresql.org/download/), além de um editor de códigos; <br />- Clone o projeto: `git clone https://github.com/marianavns/plataforma-back`<br />- Dentro da pasta do projeto, digite `npm install` no cmd para baixar as dependências do projeto;<br />- Na pasta 'server/infra', renomeie o arquivo `database_ENV.js` para `database.js` e insira as variáveis de ambiente pedidas.<br /><br />- Para as rotas de GET, configuradas por enquanto, você pode usar apenas o navegador :)<br /> |

## 🛠️ Tecnologias Utilizadas

### Para construção da API

- **Node.js**, versão 12.18.3;
- Gerenciador de pacotes node **npm**, versão 6.14.6;
- Banco de dados **PostgreSQL**;
- Editor de códigos **VSCode**.

### Para uso da API

- **Seu navegador**: para teste das funcionalidades GET (rotas) da API;

## ✔️ Features e Rotas

### Manipulando os registros de *projetos*

| Feature                                                      | Método | Rota                        |
| ------------------------------------------------------------ | ------ | --------------------------- |
| Visualizar todos os projetos                    | GET    | /projects                      |


### Manipulando os registros de *redes sociais*

| Feature                                                      | Método | Rota                        |
| ------------------------------------------------------------ | ------ | --------------------------- |
| Visualizar todos as redes sociais                    | GET    | /social-networks                      |

