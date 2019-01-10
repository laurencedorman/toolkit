Default Button:

```js
<Layout styleGuidist direction="row">
  <Button>default Button</Button>
  <Button theme="primary"> primary Button</Button>
  <Button theme="secondary">secondary Button</Button>
  <Button theme="reset">reset style Button</Button> 
  <Button disabled>disabled Button</Button> 
</Layout>

```

Button Size:
```js
<Layout styleGuidist direction="row">
    <Button size="big">big button</Button>
    <Button>default button</Button> 
    <Button size="small">small button</Button>  
    <Button size="xsmall">xsmall button</Button>   
</Layout>
```

Icon Button:
```js
<Layout styleGuidist direction="row">
    <Button size="big" icon="edit">Button</Button>
    <Button icon="edit">Button</Button>  
    <Button size="small" icon="edit">Button</Button>  
    <Button size="xsmall" icon="edit">Button</Button>   
</Layout>
```

Icon Reverse Button:
```js
<Layout styleGuidist direction="row">
    <Button theme="primary" size="big" icon="edit" reverse>Button</Button>
    <Button theme="primary" icon="edit" reverse>Button</Button>  
    <Button theme="primary"size="small" icon="edit" reverse>Button</Button>  
    <Button theme="primary" size="xsmall" icon="edit" reverse>Button</Button>   
</Layout>
```

Icon only Button:
```js
<Layout styleGuidist direction="row">
    <Button size="big" icon="edit" />
    <Button icon="edit" />
    <Button icon="edit" theme="reset" fill="#424242" />
    <Button size="small" icon="edit" />
    <Button size="xsmall" icon="edit" />  
</Layout>
```
