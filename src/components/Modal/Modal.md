modal:

```js
<Layout direction="column" styleGuidist>
  <h2>Modal</h2>
  <p><b>Modal</b> component need to be wrap with <b>Toggle</b> component like in exemple. Read <b>Toggle</b> section to have more informations.</p>
  <p><b>Modal</b> use <b>Portal</b> component who need some adding to work. Read Portal section to get more informations.</p>

 <Toggle>
  {({ on, toggle }) => (
   <div>
    <Button onClick={toggle}>Modal</Button>
    <Modal on={on} toggle={toggle}>
      <h3>Check the DOM! I'm a Modal in Portal</h3>
      <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. </p>
    </Modal>
   </div>
  )}
 </Toggle>
</Layout>

```

