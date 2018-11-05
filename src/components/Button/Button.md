Default Button:

```js
<Button>Button</Button>  
```

Primary Button:
```js
<Button theme="primary">Button</Button>  
```

Secondary Button:
```js
<Button theme="secondary">Button</Button>  
```

disabled Button:
```js
<Button disabled>Button</Button>  
```

Button Size:
```js
const style = {
  width: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
<div style={style}>
    <Button size="big">big button</Button>
    <Button>default button</Button> 
    <Button size="small">small button</Button>  
    <Button size="xsmall">xsmall button</Button>   
</div>
```

Icon Button:
```js
const style = {
  width: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
<div style={style}>
    <Button size="big" icon="edit">Button</Button>
    <Button icon="edit">Button</Button>  
    <Button size="small" icon="edit">Button</Button>  
    <Button size="xsmall" icon="edit">Button</Button>   
</div>
```

Icon Reverse Button:
```js
const style = {
  width: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
<div style={style}>
    <Button theme="primary" size="big" icon="edit" reverse>Button</Button>
    <Button theme="primary" icon="edit" reverse>Button</Button>  
    <Button theme="primary"size="small" icon="edit" reverse>Button</Button>  
    <Button theme="primary" size="xsmall" icon="edit" reverse>Button</Button>   
</div>
```

Icon only Button:
```js
const style = {
  width: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
<div style={style}>
    <Button size="big" icon="edit" reverse />
    <Button icon="edit" reverse />
    <Button size="small" icon="edit" reverse />
    <Button size="xsmall" icon="edit" reverse />  
</div>
```
