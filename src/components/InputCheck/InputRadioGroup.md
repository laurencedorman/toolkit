Input Radio Group Horizontal: 
```js
initialState = {
  selected: 'one',
  options: [
    {
      label: 'one',
      value: 'one',
    },
    {
      label: 'two',
      value: 'two',
    },
    {
      label: 'three',
      value: 'three',
    },
  ]
};

<InputRadioGroup
  options={state.options}
  groupName="horizontal"
  checked={state.selected === state.options[0].value}
  onChange={e => setState({ selected: e.target.value })}
/>
```

Input Radio Group Vertical: 
```js
initialState = {
  selected: 'one',
  options: [
    {
      label: 'four',
      value: 'four',
    },
    {
      label: 'five',
      value: 'five',
    },
    {
      label: 'six',
      value: 'six',
    },
  ]
};

<InputRadioGroup
  direction="vertical"
  options={state.options}
  groupName="vertical"
  checked={state.selected === state.options[0].value}
  onChange={e => setState({ selected: e.target.value })}
/>
```