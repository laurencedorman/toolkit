Toggle:

  * Toggle is a wrapper that sends props to display some datas with conditions. When you wrap a component with Toggle, you have access to main props <b>ON</b> as boolean and <b>TOGGLE</b> as function to switch boolean.
  * Toggle is a component that works with "render child". Syntaxe must be like in example to wrap what you need.
  
```js
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
```


Toggle Force In / Out:

 * It's exactly the same that first exemple. The difference are that <b>ToggleIn</b> and <b>ToggleOut</b> force the state to swith the boolean. It usefull on hover for exemple.

```js
 <Toggle>
   {({ on, toggleIn, toggleOut }) => (
     <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
       <Card>
        {on ? 'I\'m hovered' : 'Hover me'} 
       </Card>
     </div>
   )}
 </Toggle>
```
