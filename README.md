<h1 align="center">Cypress & Be The Hero </h1>
<p align="center">Um projeto para aprender sobre o Cypress no Youtube</p>

------------

Esta é uma série de vídeos gratuitos e que seguem uma sequência nos conteúdos, indo do mais básico que é a criação do projeto, problemas comuns e propostas de solução, melhoria da arquitetura com o padrão Page Objects e finalizando com a geração de relatórios para os testes. Vale ressaltar que praticamente todo o conteúdo é muito prático - a teoria e eventuais explicações são dadas a medida em que os problemas são resolvidos, em pequenas porções.

## Abaixo um resumo:

- como criar um projeto node
- como adicionar o Cypress ao projeto
- como criar a estrutura de pastas padrão do Cypress
- como executar os testes utilizando o Cypress Runner
- como acessar uma página
- como mapear elementos utilizando Cypress
- como utilizar comandos comuns de digitar, clicar, etc.
- como realizar asserções nos nossos testes
- como criar comandos customizados para auxiliar no desenvolvimento
- como fazer requisições para a api
- como executar testes de forma independente
- como configurar a aplicação testada para executar localmente
- como criar um script para subir o Cypress de forma mais organizada
- como manipular recursos do browser, como o localStorage
- reforçar o padrão de testes independentes
- como criar seletores dedicados para testes
- qual problema o page objects se propõe a resolver
- como criar uma estrutura simples para usar este padrão
- como separar testes, ações e elementos da página

## Passo a passo para executar os testes

#### Baixe o projeto no Github:
- `https://github.com/samlucax/youtube-cypress.git`

#### Instale e suba nossa *cobaia* localmente
1.Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

2.Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`

#### Instale e abra o Cypress
3.Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
  - `npm install`
  - `./node_modules/.bin/cypress open`


------------