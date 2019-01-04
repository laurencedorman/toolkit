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
      title: 'option title 1',
      disabled: false,
    },
    { 
      id: '1',
      title: 'option title 2 with extend title',
      disabled: false,
    },
    { 
      id: '2',
      title: 'option title 3',
      disabled: false,
    },
    { 
      id: '3',
      title: 'option title 4 with disabled set at true',
      disabled: true,
    },
    { 
      id: '4',
      title: 'option title 5',
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
         title={state.currentValue !== '' ? state.currentValue : state.defaultValue}
         itemClick={e => setState({currentValue: e.currentTarget.dataset.value})}
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
      title: 'option title 5',
      disabled: false,
    },
    { 
      id: '6',
      title: 'option title 6 with extend title',
      disabled: false,
    },
    { 
      id: '7',
      title: 'option title 7',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
    <Toggle>
     {({on, toggle}) => (
       <DropDown
         on={on}
         right
         toggle={toggle}
         options={state.option}
         title={state.currentValue !== '' ? state.currentValue : state.defaultValue}
         itemClick={e => setState({currentValue: e.currentTarget.dataset.value})}
       />
     )}
    </Toggle>
</Layout>
```



