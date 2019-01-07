Custom light dropDown :

  * Remove arrow indicator with props icon (true by default).
  * Change background color with props backgroundColor.
  * Add disabled property on object to disabled some item option.
  * Add props 'right' at true to changed alignement container options.

```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    { 
      id: '0',
      value: 'option title 1',
      disabled: false,
    },
    { 
      id: '1',
      value: 'option title 2 with extend title',
      disabled: false,
    },
    { 
      id: '2',
      value: 'option title 3',
      disabled: false,
    },
    { 
      id: '3',
      value: 'option title 4 with disabled set at true',
      disabled: true,
    },
    {   
      id: '4',
      value: 'option title 5',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h4>DropDown</h4>

    <Toggle>
     {({on, toggle}) => (
       <DropDown
         on={on}
         toggle={toggle}
         options={state.option}
         active={state.currentValue}
         title={state.currentValue !== '' ? state.currentValue : state.defaultValue}
         onClick={e => setState({currentValue: e.currentTarget.dataset.value})}
       />
     )}
    </Toggle>
</Layout>
```

```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    { 
      id: '5',
      value: 'option title 5',
      disabled: false,
    },
    { 
      id: '6',
      value: 'option title 6 with extend title',
      disabled: false,
    },
    { 
      id: '7',
      value: 'option title 7',
      disabled: false,
    },
  ],
};
  
<Layout direction="column" styleGuidist>
    <Toggle>
     {({on, toggle}) => (
       <DropDown
         on={on}
         toggle={toggle}
         options={state.option}
         right
         icon={false}
         title="title"
         active={state.currentValue}
         onClick={e => setState({currentValue: e.currentTarget.dataset.value})}
       />
     )}
    </Toggle>
</Layout>
```



