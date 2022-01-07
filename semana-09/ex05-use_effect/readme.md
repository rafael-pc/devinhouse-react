# useEffect

Quando usamos o useEffect, existe um segundo parâmetro que podemos passar e que altera o seu comportamento. O que acontece com o useEffect:

<br>

A. Quando não passamos o segundo parâmetro?

```
resp: Quando o useEffect é chamado sem um array de dependências, ele é executado a cada renderização do componente. Portanto, toda vez que alteramos um estado do componente utilizando a função setter do useState, o useEffect é executado.
```
<br>

B. Quando passamos um array vazio?

```
resp: Quando o useEffect é chamado com o array de dependências vazio, ele executa uma única vez na primeira renderização. Mesmo que o estado altere e o componente renderize novamente, a callback do useEffect não é chamada novamente.
```
<br>

C. Quando passamos um array com uma variável (estado ou prop)?

```
resp: Quando o useEffect é chamado com o array de dependências com valores, ele executa toda vez que este valor é alterado. Esta sintaxe é utilizada quando nosso callback do useEffect depende de algum valor externo.
```
