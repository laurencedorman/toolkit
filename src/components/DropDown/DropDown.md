Custom basic dropDown :
```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: ['Jean-Louis De La Noche', 'Bob in da mix', 'Jack o Joe']
};


<Toggle>
 {({on, toggle}) => (
   <DropDown
     on={on}
     toggle={toggle}
     title="DropDown"
     options={state.option}
     title={state.currentValue !== '' ? state.currentValue : state.defaultValue}
     itemClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
   />
 )}
</Toggle>
```


