Field :

  Field is a form component with props to pass validation and normalize control.
  
```js
initialState = {value: ''};

  <Field
    component={Input}
    label="label field"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
```
