Field :

  * Field is a decorator for form component to controled validation and format data

```js
const requiredLength = value =>
  (value && value.length < 12 || value === undefined)
    ? 'Too short'
    : true;

const limitLength = (value, maxLength) =>
  (value.length > maxLength) ? value.slice(0, maxLength) : value;

const normalizeBic = value => value && limitLength(value.toUpperCase(), 14);

<Field
  validate={requiredLength}
  normalize={normalizeBic}
  formComponent={Input}
/>
```
