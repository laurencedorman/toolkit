
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
