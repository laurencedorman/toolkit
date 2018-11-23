Select :
```js
initialState = {
value: 'ocean',
options: [
{ value: 'ocean', label: 'Ocean' },
{ value: 'mountain', label: 'Mountain' },
{ value: 'campagn', label: 'Campagn' },
]
};

<div style={{width: 250}}> 
<DropDown
  placeholder="DropDown"
  name="name"
  options={state.options}
/>
</div>
```

```js
<div style={{width: 250}}> 
 <DropDown
   name="name"
   options={state.options}
   icon
   placeholder={<div>NODE placeholder</div>}
/>
</div>
```
    

