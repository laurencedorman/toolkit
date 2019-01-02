Alert:

 * Display an alert with Hint Component.
 * You can use Toggle component to easy display. Read <b>Toggle</b> section to have more informations.
 * Alert use <b>Portal</b> component who need some adding to work. Read Portal section to get more informations..
 * Set different theme `[ 'default' | 'light' | 'danger' | 'menthe' ]`.
 * Change icon.
 * Set timeout in ms to remove automatically alert.
 * Set position `[ 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft' ]`.
 
Tips:
 
 * Force toggleOut on toggle props to avoid conflict between close click event and close timeout function

```js
const style = {
  alignItem: 'center',
};

<Layout direction="column" styleGuidist>  
 <Toggle>
  {({ on, toggle, toggleOut }) => (
   <div>
    <h4>Alert theme "danger" position "topRight" (default position)</h4>
    <Button onClick={toggle}>Click</Button>
    <Alert
      on={on}
      toggle={toggleOut}
      theme="danger"
      textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
      timeout={3000}
    />
   </div>
  )}
 </Toggle>
  <br />
 <Toggle>
   {({ on, toggle, toggleOut }) => (
    <div>
      <h4>Alert theme "default" position "bottomRight"</h4>
     <Button onClick={toggle}>Click</Button>
     <Alert
       on={on}
       toggle={toggleOut}
       textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
       timeout={3000}
       position="bottomRight"
     />
    </div>
   )}
  </Toggle>
  <br />
  <Toggle>
    {({ on, toggle, toggleOut }) => (
     <div>
     <h4>Alert theme "light" position "topLeft"</h4>
      <Button onClick={toggle}>Click</Button>
      <Alert
        on={on}
        toggle={toggleOut}
        theme="light"
        textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
        timeout={3000}
        position="topLeft"
      />
     </div>
    )}
   </Toggle>
    <br />
   <Toggle>
     {({ on, toggle, toggleOut }) => (
      <div>
       <h4>Alert theme "menthe" position "bottomLeft"</h4>
       <Button onClick={toggle}>Click</Button>
       <Alert
         on={on}
         toggle={toggleOut}
         theme="menthe"
         textAlert="Nunc yo arcu. Donec ante. We gonna chung placerizzle mauris at lectus. Morbi fo shizzle tortizzle. Crizzle yo mamma tortor nizzle mi consectetizzle sure. Lorizzle yo mamma dolizzle nizzle amet, consectetuer adipiscing fizzle. Ma nizzle fizzle arcu, things uhuh ... yih!, eleifend izzle, mollizzle in, est. Aliquizzle erat volutpizzle."
         timeout={3000}
         position="bottomLeft"
       />
      </div>
     )}
    </Toggle>
</Layout>
```

