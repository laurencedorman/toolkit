Switch example:

```js
initialState = { checked: false };

<Switch
  id="id"
  name="name"
  value="id"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>
```