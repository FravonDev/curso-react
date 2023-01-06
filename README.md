# ⚛Aprendendo sobre react⚛
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

**O que é um component?**

Pra entendermos melhor os components precisamos entender o que é o **JSX**. 

O React usa **JSX**, que é um tipo html que nos da superpoderes, com ele podemos:

escrever código html dentro do código javascript, com isso podemos salvar Html dentro de variaveis, renderizar variaveis, executar funções usar loops, receber dados de uma api e renderizar na tela.

**Component**

Um component é simplismente uma função que nos retorna JSX

```jsx
function app(){
return <h1>Meu site</h1>
}
export default App
```

no React cada component só pode retornar **uma** JSX

para contornar podemos usar uma div:

```jsx
const Pokemon = () => {
  return <h2>Nome do pokemon: pikachu</h2>;
}

const App = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon/>
      </div>
  );
}
```

**Legal mas o nome do Pokémon está estático ne?**

Bem observado!! Não seja por isso vamos transformar em dados dinâmicos, com o poder do JSX !

```jsx
const nomeDoPokemon = "bulsasaur"
const Pokemon = () => {
  return <h2>Nome do pokemon: {nomeDoPokemon}</h2>;
}

const App = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon/>
      </div>
  );
}
```

Podem ser até funções, e mais pode ser retornar até elementos **JSX**

```jsx
const RenderizaNomeDoPokemon = () => <p>Charizard</p>

const Pokemon = () => {
  return (
    <div>
      <h1>Nome do pokemon:</h1>
      {RenderizaNomeDoPokemon()}
    </div>
  )
}

const App = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon/>
      </div>
  );
}

export default App;
```

Como a ideia principal do React é usa-lo de uma forma mais livre, você pode organizar da forma que você quiser, ou pode procurar as formas mais utilizadas por outras pessoas ou empresas.

**Export**

Escolhi seguir a forma do Daniel pois é menos verboso

```jsx
export const Home = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon/>
      </div>
  );
}
```

Mas poderia exportar no final sem problema nenhum

```jsx
const Home = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon/>
      </div>
  );
}

export default Home;
```

nos arquivos js, se ele for um **component,** colocamos a extensão dele como **JSX**, ficando:  **MeuComponent.jsx**

se for uma função usamos a extensão **js,** ficando **: AlgumaFuncao.js**

**Props**

queremos passar o nome de cada pokemon

o que vai nos ajudar com isso são as **Props**

Assim como a tag img tem o atributo **src** <Img src=””>

podemos criar nossos próprios atributos em nossos components, como nome do pokemon usando props.

```jsx
import { Pokemon } from "../components/Pokemon";

export const Home = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon name="Charmander"/>
      </div>
  );
}
```

Agora nosso pokemon está enviando **props**, agora precisamos usa-la no pokemon component

```jsx
export const Pokemon = (props) => {
  return <h1>Nome do pokemon: {props.name}</h1>;
}
```

 

se quisermos usar apenas name ao invés de props.name, usamos destructuring

```
export const Pokemon = ({name}) => {
  return <h1>Nome do pokemon: {name}</h1>;
}
```

Caso não tenhamos um pokemon, podemos usar ternário

```jsx
export const Pokemon = ({name}) => {
  return <h1>Nome do pokemon: {name ? name : 'Pikachu'}</h1>;
}
```

Além disso, Não vamos renderizar só1 Pokémon, nós vamos renderizar vários !

**Estilização no React**

Primeiramente vamos aprender o **Css raiz** e logo depois vamos usar frameworks

 podemos simplismente criar um arquivo css e  importar ele:

```jsx
import "./styles.css"

export const Pokemon = ({name = 'pikachu' }) => {
  return <h1 className="title">Nome do pokemon: {name}</h1>;
}
```

Ou podemos usar **módulos** 

No css raiz não podemos ter nomes repetidos, senão vamos sobrepor os estilos

Mas com módulos podemos ter 300 titles, que não teremos problemas, pois ele mesmo irá trocar o nome do arquivo, nome da classe e adicionará um hash aleatório.

Mais vantagens de usar módulos:

- Isolamento de estilo: Quando isolamos o estilo de um component, evitamos conflitos de estilo e torna o código mais fácil de entender
- Reutilização: é mais fácil **reutilizar** Componentes com **módulos CSS**
- performance: os módulos são carregados de forma dinâmica e só são incluidos na pagina quando são realmente necessários
- Manutenção: fica mais fácil manter o código com módulos CSS, pois o estilo está junto com o componente o compon. Isso também torna mais fácil para outros desenvolvedores entender como o estilo está sendo aplicado e fazer alterações se necessário

```jsx
import styles from './styles.module.css';

export const Pokemon = ({name = 'pikachu' }) => {
  return <h1 className={styles.title}>Nome do pokemon: {name}</h1>;
}
```

Vamos criar uma pasta para cada component, por exemplo, Criaremos uma pasta chamada  Pokemon

depois vamos renomear os arquivos dela,  para **Index.**

assim quando formos importar nosso component, só precisamos mostrar  a pasta e depois  ele vai procurar **automagicamente** o arquivo index com isso o import ficará um pouco menor!

Assim como a tag img tem o atributo **src** <Img src=””>

podemos criar nossos próprios atributos em nossos components, como nome do pokemon usando props.

```jsx
import { Pokemon } from "../components/Pokemon";

export const Home = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon name="Charmander"/>
      </div>
  );
}
```

Agora nosso pokemon está enviando **props**, agora precisamos usa-la no pokemon component

```jsx
export const Pokemon = (props) => {
  return <h1>Nome do pokemon: {props.name}</h1>;
}
```

 

se quisermos usar apenas name ao invés de props.name, usamos destructuring

```
export const Pokemon = ({name}) => {
  return <h1>Nome do pokemon: {name}</h1>;
}
```

Caso não tenhamos um pokemon, podemos usar ternário

```jsx
export const Pokemon = ({name}) => {
  return <h1>Nome do pokemon: {name ? name : 'Pikachu'}</h1>;
}
```

Além disso, Não vamos renderizar só1 Pokémon, nós vamos renderizar vários !

**Estilização no React**

Primeiramente vamos aprender o **Css raiz** e logo depois vamos usar frameworks

 podemos simplismente criar um arquivo css e  importar ele:

```jsx
import "./styles.css"

export const Pokemon = ({name = 'pikachu' }) => {
  return <h1 className="title">Nome do pokemon: {name}</h1>;
}
```

Ou podemos usar **modulos** 

Existem algumas vantagens de usar módulos css como por exemplo:

- Isolamento de estilo: Quando isolamos o estilo de um component, evitamos conflitos de estilo e torna o código mais fácil de entender
- Reutilização: é mais fácil **reutilizar** Componentes com **módulos CSS**
- performance: os módulos são carregados de forma dinâmica e só são incluidos na pagina quando são realmente necessários
- Manutenção: , fica mais fácil manter o código com módulos CSS, pois o estilo está junto com o componente o compon. Isso também torna mais fácil para outros desenvolvedores entender como o estilo está sendo aplicado e fazer alterações se necessário

```jsx
import styles from './styles.module.css';

export const Pokemon = ({name = 'pikachu' }) => {
  return <h1 className={styles.title}>Nome do pokemon: {name}</h1>;
}
```

Vamos criar uma pasta para cada component, por exemplo, Criaremos uma pasta chamada  Pokemon

depois vamos renomear os arquivos dela,  para **Index.**

assim quando formos importar nosso component, só precisamos mostrar  a pasta e depois  ele vai procurar **automagicamente** o arquivo index com isso o import ficará um pouco menor!
