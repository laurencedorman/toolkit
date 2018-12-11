Custom basic dropDown :
```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    { 
      id: '',
      title: 'Jean-Louis',
    },
    { 
      id: '',
      title: 'Jean-Mi',
    },
    { 
      id: '',
      title: 'Jean-Jack',
    },
  ],
};


<Toggle>
 {({on, toggle}) => (
   <DropDown
     on={on}
     toggle={toggle}
     options={state.option}
     title={state.currentValue !== '' ? state.currentValue : state.defaultValue}
     itemClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
   />
 )}
</Toggle>
```


