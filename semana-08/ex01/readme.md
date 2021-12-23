## Componentes
<br>

Componentes permitem dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.
<br>

A maneira mais simples de definir um componente é escrever uma função JavaScript:
<br><br>

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
<br>

Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

Também pode-se usar uma classe ES6 para definir um componente:
<br><br>

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
<br>

Os dois componentes acima são equivalentes do ponto de vista do React.