# ⚛React Learning⚛

Sempre que vou aprender uma tecnologia, faço algumas perguntas!

**O que é o React??**

é uma **Biblioteca**, ou seja podemos criar código com Html, css e js.

E se eu achar que serial legal usar React, eu posso dar npm install react e usar ele normalmente

**O que ele faz?**

React é uma biblioteca de Frontend que cria a parte visual da aplicação, a UI (user interface), ela não cria servidores e Apis.

Ele implementa uma arquitetura chamada **(SPA)** **Single Page Application**

A Single Page Application é uma aplicação de somente uma página, que fica trocando de conteudo.

As  vantagens são

**Porque aprender React??**

Performance: React usa a virtual DOM para otimizar as atualizações na DOM, o que ajuda a melhorar a performance da nossa aplicação

Reusabilidade: Utilizando a estrutura de components, torna nosso código mais modular e facilita a manutenção

Popularidade: React é usado em diversas companias

Ecossistema: 

**Okay mas Como eu crio uma aplicação com React?**

Geralmente  Usamos a ferrementa **CRA**, que é muito versátil.

Com ela podemos utilizar **templates, e**ntão se eu quiser usar Typescript na aplicação é so usar o template de typescript, se eu quiser usar Redux posso usar o template de redux!

```jsx
npx create-react-app nome-app
```

Na Pasta public tem um arquivo chamado index.html, que tem uma <**div id=”root”></div>**

E é aqui que os components vão ser renderizados, é aqui que os elementos vão ser inseridos e removidos.

O nome disso é hidratação, quando o react termina de baixar o javascript e começa a inserir nessa div id=”root”, ou seja o react é baixado o react roda e começa a inserir alguma coisa na tela