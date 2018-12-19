modal:

```js
<Layout direction="column" styleGuidist>
  <h2>Alert</h2>

 <Toggle>
  {({ on, toggle }) => (
   <div>
    <Button onClick={toggle}>Alert</Button>
    <Alert on={on} toggle={toggle} theme="danger" textAlert="test" />
   </div>
  )}
 </Toggle>
</Layout>
```

