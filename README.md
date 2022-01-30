<p align="center"> <img src=".github/cover.png" /> </p>

<h1 align="center">MicroFrontend POC</h1> 
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-ferramentas">Ferramentas</a> •
 <a href="#-configuracoes">Configurações</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-recomendações-e-explicações">Recomendações e Explicações</a> • 
<a href="#user-content--licença">Licença</a>
</p>

---

## 💻 Sobre o projeto
É uma aplicação que foi desenvolvida para fins de estudo da arquitetura de micro-frontends, nela utilizei o webpack e module federation para tratar os mfe's </br>

---

## 🛠 Ferramentas
As seguintes ferramentas foram usadas na construção do projeto:
- React
- Typescript
- Webpack & Module Federation
- Javascript
- Redux & Redux Toolkit
- Styled Component
- Workspaces

---

## ⚙️ Configurações

O projeto possui configurações com modos de ambientes.
> Ex.: Development, Staging, Production.

As configurações de ambiente já estão adicionadas ao projeto, então para faze-lo funcionar, basta instalar as dependências na raiz do projeto e executar

O projeto irá utilizar as portas:
`3000 & 3001 & 3002`

### Projetos

**Shell** -
Shell / Host / Container / Consumer.

Esses são os nomes mais comuns que você irá encontrar, todos eles tem o mesmo objetivo, que é para englobar os outros projetos.

**Mfe1** - Compartilho uma página com alguns cards.

**Mfe2** - Se dá pela utilização de um estado do redux disparado diretamente da Shell, conseguindo compartilhar o estado da aplicação, poderia ser feito também com **ContextApi**, adicionando a instância da shell no proprio remote e alterar o caminho absoluto para o do module-federation.

> Ex.: import { AuthProvider, useAuth } from '~/hooks/auth'

**Para**

> Ex.: import { AuthProvider, useAuth } from 'shell/hooks/auth'

Deve ser feito para os dois.

---

## 🚀 Como executar o projeto
**Basta fazer os seguintes passos...**

- Basta instalar as dependências na raiz do projeto usando:
> `yarn install `

Não se preocupe, pois o workspaces irá fazer todo o trabalho de instalar as dependências de cada projeto.

- E para rodar o projeto:
> `yarn dev `
Quando executado, irá abrir 3 instâncias de Webpack DevServer, uma para cada projeto.

---

## 🧐 Recomendações e Explicações
O projeto está utilizando a arquitetura de mono-repo somente para facilitar o entendimento. 

Porém, caso precise criar uma arquitetura parecida, o ideal é executar cada projeto separadamente, e não acoplar itens de um mfe para outro, pois caso um mfe fique offline o outro que está utilizando-o como dependência irá ficar off até que o outro torne a ficar online novamente.

Isso ocorre pois o projeto x usa como dependência o projeto y, então, logo quando o modulo não é encontrado acontece um error e deixa de funcionar.

Existe diversas formas para tratar esse problema, porém o ideial é não segregar valor de um para outro.

> Ex.: [Error Boundaries](https://pt-br.reactjs.org/docs/error-boundaries.html), Mock do component e etc...


O mais utilizado é o Error Boundaries.


---

## 👀 Visualização
![Preview](.github/preview.gif)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Alan Neres 👋🏽 [Entre em contato!](https://www.linkedin.com/in/alan-neres/)

---

## 🇧🇷 Linguagens
[🇺🇸 English](./README-en.md)


## 👨‍💻 Ainda em desenvolvimento (TODO)

- [x] Redux to mfe2
- [] Solved webpack.config's
- [x] Add React Erro Bondaries