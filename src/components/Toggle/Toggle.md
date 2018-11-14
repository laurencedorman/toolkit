
Toggle:
```js
<Toggle>
  {({ on, toggle }) => (
    <div>
      <Button onClick={toggle}>
        {on ? 'hide' : 'show'} 
      </Button>
      {on && <h1>Title Toggle</h1>}
    </div>
  )}
</Toggle>
```
