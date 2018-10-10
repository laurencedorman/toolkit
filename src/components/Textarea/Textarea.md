```js
initialState = {value: ''};

<Textarea 
    name="textarea"
    id="id"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    placeholder="Placeholder"
/>
```

```js
<Textarea 
name="textarea"
id="id"
placeholder="Disabled Placeholder"
disabled
/>
```

```js
<Textarea 
name="textarea"
id="id"
placeholder="Disabled Placeholder"
readOnly
/>
```