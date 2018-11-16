
Toggle:
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
```js
<Toggle>
  {({ on, toggleIn, toggleOut }) => (
    <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
      <h1>{on ? 'I\'m hovered' : 'Hover me'}</h1>
    </div>
  )}
</Toggle>
```
