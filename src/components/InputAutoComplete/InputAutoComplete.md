autocomplete as array
```js
const autocomplete = Array.from(new Array(20), (v, i) => ({ label: 'Paris', value: (75001 + i).toString() }));

<InputAutoComplete
  placeholder="Zip code"
  autocomplete={autocomplete}
/>
```

autocomplete as async function
```js
const autocomplete = (value) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Array
          .from(new Array(20), (v, i) => ({ label: 'Paris', value: (75001 + i).toString() }))
          .filter(suggestion => suggestion.value.indexOf(value) === 0)
      );
    }, 1000);
  });
};

<InputAutoComplete
  placeholder="Zip code"
  autocomplete={autocomplete}
/>
```

autocomplete as async function: error
```js
const autocomplete = () => Promise.reject(new Error('💣'));

<InputAutoComplete
  type="number"
  placeholder="Zip code"
  autocomplete={autocomplete}
/>
```

disabled
```js
const initialState = { disabled: true };
const autocomplete = Array.from(new Array(20), (v, i) => ({ label: 'Paris', value: (75001 + i).toString() }));

<div>
  <InputAutoComplete
    disabled={state.disabled}
    placeholder="Zip code"
    autocomplete={autocomplete}
  />
  <br />
  <InputCheck
    type="checkbox"
    label="disabled"
    value="value"
    checked={state.disabled}
    onChange={() => setState({ disabled: !state.disabled })}
  />
</div>
```
