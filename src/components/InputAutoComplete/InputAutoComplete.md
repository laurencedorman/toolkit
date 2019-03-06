predict as array
```js
const predict = Array.from(new Array(20), (v, i) => ({ label: 'Paris', value: (75001 + i).toString() }));

<InputAutoComplete
  placeholder="Zip code"
  predict={predict}
/>
```

predict as async function
```js
const predict = (value) => {
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
  predict={predict}
/>
```

predict as async function: error
```js
const predict = () => Promise.reject(new Error('💣'));

<InputAutoComplete
  type="number"
  placeholder="Zip code"
  predict={predict}
/>
```

disabled
```js
const initialState = { disabled: true };
const predict = Array.from(new Array(20), (v, i) => ({ label: 'Paris', value: (75001 + i).toString() }));

<div>
  <InputAutoComplete
    disabled={state.disabled}
    placeholder="Zip code"
    predict={predict}
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
