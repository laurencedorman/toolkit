Field :

  Field is a form component with props to pass validation and normalize control.
  
```js
initialState = {value: ''};

  <Field
    component={Input}
    label="label field"
    // name="name"
    // id="id"
    // type="text"
    validate
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
  />
```
