Input Radio Group Horizontal: 
```js
initialState = {
  selected: 'mp3',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle',
    },
    {
      label: 'CD',
      value: 'cd',
    },
    {
      label: 'Mp3',
      value: 'mp3',
    },
  ]
};

<InputRadioGroup
  options={state.options}
  groupName="horizontal"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.target.value })}
/>
```

Input Radio Group Vertical: 
```js
initialState = {
  selected: 'magneto',
  options: [
    {
      label: 'Cassette',
      value: 'cassette',
    },
    {
      label: 'Magneto',
      value: 'magneto',
    },
    {
      label: 'MiniDisc',
      value: 'minidisc',
    },
  ]
};


<InputRadioGroup
  direction="vertical"
  options={state.options}
  groupName="vertical"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.target.value })}
/>
```