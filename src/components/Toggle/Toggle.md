
Toggle:
```js
<Layout direction="column" styleGuidist>
  <h2>Toggle</h2>
  <p>Toggle is a wrapper that sends props to display some datas with conditions. When you wrap a component with Toggle, you have access to main props <b>ON</b> as boolean and <b>TOGGLE</b> as function to switch boolean</p>
  <p>Toggle is a component that works with "render child". Syntaxe must be like in example to wrap what you need.</p>

 <Toggle>
   {({ on, toggle }) => (
     <div>
       <Button onClick={toggle}>
         {on ? 'Toggle On' : 'Toggle Off'} 
       </Button>
       {on && <div style={{paddingTop: 16}}><h1>Title Toggle</h1></div>}
     </div>
   )}
 </Toggle>
</Layout>

```


Toggle Force In / Out:
```js
<Layout direction="column" styleGuidist>
  <h2>Toggle Force</h2>
  <p>It's exactly the same that first exemple. The difference are that <b>ToggleIn</b> and <b>ToggleOut</b> force the state to swith the boolean. It usefull on hover for exemple.</p>

 <Toggle>
   {({ on, toggleIn, toggleOut }) => (
     <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
       <Card>
        {on ? 'I\'m hovered' : 'Hover me'} 
       </Card>
     </div>
   )}
 </Toggle>
</Layout>
```
