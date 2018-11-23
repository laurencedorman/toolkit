Input basic :
```js
initialState = {value: ''};

<Input
  label="Input text"
  type="text"
  id="id"
  name="name"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>

```

Input with helper :
```js
initialState = {value: ''};

<Input
  label="Input text with helper"
  type="text"
  id="id"
  name="name"
  helper="An helper to display some informations!"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>
```

Input with error :
```js
initialState = {value: ''};

<Input
  label="Input mail with error"
  type="email"
  id="withError"
  name="withError"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  error="error was found"
/>
```

Input with set value :
```js
initialState = {value: 'I have set value'};

<Input
  label="Input with value"
  type="text"
  id="withValue"
  name="withValue"
  onChange={e => setState({ value: e.target.value })}
  value={state.value}
/>
```

Input with helper and error :
```js
initialState = {value: ''};

<Input
    label="Input with helper and error"
    type="text"
    id="withHelperError"
    name="withHelperError"
    helper="An helper to display some informations!"
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    error="error was found"
/>
```

Disabled Input :
```js
initialState = {value: ''};

 <Input
  label="Disabled Input"
  type="text"
  id="disabled"
  name="disabled"
  disabled
/>
```

Required Input :
```js
initialState = {value: ''};

<Input
  label="Input text Required"
  type="text"
  id="requiredId"
  name="RequiredName"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  required
/>
```

Validated Input :
```js
initialState = {value: 'Value is valid !'};

<Input
  label="Validated Input"
  type="text"
  id="Validated"
  name="Validated"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  valid
/>
```

Input with icon :
```js
initialState = {value: ''};

<Input
  label="Input with icon"
  type="text"
  id="Icon"
  name="Icon"
  icon="lock"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>
```

Input with icon left :
```js
initialState = {value: ''};

<Input
  label="Input with icon"
  type="text"
  id="IconReverse"
  name="Icon reverse"
  icon="lock"
  reverse
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>
```
