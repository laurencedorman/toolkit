```js
<Link href="https://www.manomano.fr">ManoMano</Link>
```

```js
const onClick = () => alert('You clicked the link!');

<Link onClick={onClick}>Click me</Link>;
```

```js
<Link disabled={true} onClick={() => null}>
  Click me
</Link>
```
