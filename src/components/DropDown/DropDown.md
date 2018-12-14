

Custom basic dropDown :
```js
initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    { 
      id: '0',
      title: 'Jean-Louis Albert de la nocheeee',
      disabled: false,
    },
    { 
      id: '1',
      title: 'Jean-Michel Albert de la noche de la magnananana',
      disabled: false,
    },
    { 
      id: '2',
      title: 'Jean-Jack',
      disabled: false,
    },
    { 
      id: '3',
      title: 'Jean-Daniel',
      disabled: true,
    },
    { 
      id: '4',
      title: 'Jean-Hervé',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h2>DropDown</h2><br />
  <p>Custom light DropDown with Button Design</p>
  <ul>
    <li>- Remove arrow indicator with props icon (true by default) </li>
    <li>- Change background color with props backgroundColor</li>
    <li>- Add disabled property on object to disabled some item option </li>
    <li>- Add props 'right' at true to changed alignement container options</li>
  </ul><br />
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


