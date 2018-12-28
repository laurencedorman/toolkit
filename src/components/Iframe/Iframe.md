Iframe example:

 * An iframe need to be wrap with a div with width and height defined.
 * Wrapper need to have overflow hidden.


```js
const style = {
  position: 'relative',
  width: '100%',
  height: 300,
  overflow: 'hidden',
};

<div style={style}>
<Iframe
  id="supermano"
  title="supermano"
  src="https://www.supermano.fr/"
/>  
</div>

```

