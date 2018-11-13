Select :
```js
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
  ]
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="placeholder"
/>
```

Select with helper :
```js
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
  ]
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="placeholder"
  helper="An helper to display some informations!"
/>
```

Select with error :
```js
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
  ]
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="placeholder"
  error="Error"
/>
```

Select with multiple value :
```js
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
    { value: 'campagn', label: 'Campagn' },
  ]
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="placeholder"
  isMulti
  defaultValue={[state.options[0], state.options[1], state.options[2], state.options[3], state.options[4], state.options[5], state.options[6], state.options[7]]}
/>
```
