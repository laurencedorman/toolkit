Custom basic dropDown :
```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    { 
      id: '0',
      title: 'Jean-Louisssssssssssssssssss',
    },
    { 
      id: '1',
      title: 'Jean-Mi',
    },
    { 
      id: '2',
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


