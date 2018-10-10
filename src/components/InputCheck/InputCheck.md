
Input Checkbox: 
```js
initialState = {checked: false};

<InputCheck
  type="checkbox"
  label="Checkbox"
  id="id"
  name="name"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>
```

Input radio: 
```js
initialState = {selected: 'valueRadioTwo'};
onChange = e => setState({ selected: e.target.value });

<div style={{ display: 'flex', justifyContent: 'space-around', width: 400 }}>
    <InputCheck
      type="radio"
      label="Choice One"
      id="valueRadioOne"
      name="group"
      checked={state.selected === "valueRadioOne"}
      onChange={onChange}
    />
    <InputCheck
      type="radio"
      label="Choice Two"
      id="valueRadioTwo"
      name="group"
      checked={state.selected === "valueRadioTwo"}
      onChange={onChange}
    />
</div>
```
