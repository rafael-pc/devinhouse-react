## Renderização condicional
<br>

Renderização condicional em React funciona da mesma forma que condições funcionam em JavaScript. Os operadores de JavaScript como if ou operador condicional criam elementos representando o estado atual, e o React atualiza a UI para corresponde-los.

Considerando esses dois componentes:
<br><br>

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```
<br>

Criando um componente Greeting que mostra um dos outros dois componentes se o usuário estiver logado ou não:
<br><br>

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
```
<br>

Este exemplo renderiza um “greeting” diferente dependendo do valor da prop isLoggedIn.


