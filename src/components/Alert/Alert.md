Alerte:

```js
<Layout direction="column" styleGuidist>
  <h2>Alert</h2>
  <p>Display an alert with Hint Component. <br/>You can set Theme and display an other Icon than default.</p>

 <Toggle>
  {({ on, toggle }) => (
   <div>
    <Button onClick={toggle}>Trigger Alert</Button>
    <Alert
      on={on}
      toggle={toggle}
      theme="danger"
      textAlert="test"
    />
   </div>
  )}
 </Toggle>
</Layout>
```

